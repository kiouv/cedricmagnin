/* global module:false */
module.exports = function( grunt ) {

  grunt.registerTask( 'fonts', function(){

    grunt.registerTask( 'font2styl', function(){
      var json2fontcss = require( 'json2fontcss' ),
          fs = require( 'fs' ),
          fonts = JSON.parse(fs.readFileSync( '_sources/font.json', 'utf8'));

      json2fontcss.addMustacheTemplate('less', fs.readFileSync( '_sources/templates/icons.mustache', 'utf8'));

      var css = json2fontcss({
        chars: fonts.chars,
        fonts: fonts.relFonts,
        fontFamily: fonts.fontFamily,
        template: 'less'
      });

      // Write it out to the CSS file
      grunt.file.mkdir('styles');
      fs.writeFileSync( 'styles/_icons.less' , css, 'utf8');

    } );

    grunt.registerTask( 'cleanFont', function(){
      grunt.file.delete( '_sources/font.json' );
    } );

    grunt.task.run( [
      'font',
      'font2styl',
      'cleanFont',
      'copy:fonts'
    ] );

  } );

};
