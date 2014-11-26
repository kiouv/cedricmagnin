/* global module:false */
var path = require( 'path' ),
    files,
    datas,
    devDatas;
module.exports = function(grunt){

  datas = grunt.file.readJSON('pages/vars.json');
  devDatas = grunt.util._.extend( { dev: true }, datas );

  files = [{
    expand: true,
    cwd: 'pages/',
    src: [ '**/*.jade', '!_**/*.jade', '!_*.jade', "!tree.jade" ],
    ext: '.html',
    dest: '<%= build %>'
  }];

  grunt.event.on('watch', function(action, filepath) {
    var filename = path.basename( filepath );
    if( '.jade' === path.extname( filepath ) || 'vars.json' === filename ){
      var src = files;
      if( 'pages' === path.dirname( filepath ) && 'vars.json' !== filename ){
        src = [{
          expand: true,
          cwd: 'pages/',
          src: [ path.basename( filepath ) ],
          ext: '.html',
          dest: '<%= build %>'
        }];
      }
      else if( 'vars.json' === filename ){
        datas = grunt.file.readJSON('pages/vars.json');
        grunt.config( 'jade.dev.options.data', grunt.util._.extend( { dev: true }, datas ) );
      }
      grunt.config( 'jade.dev.files', src );

    }
  });

  return {
    dev: {
      files: [{
        expand: true,
        cwd: 'pages/',
        src: [ '**/*.jade', '!_**/*.jade', '!_*.jade', "!tree.jade" ],
        ext: '.html',
        dest: '<%= build %>'
      }],
      options: {
        data: devDatas,
        pretty: true,
        selfClose: true,
        compileDebug: false
      }
    },
    release: {
      files: '<%= jade.dev.files %>',
      options: {
        data: datas,
        pretty: true,
        selfClose: true,
        compileDebug: false
      }
    },
    release: {
      files: '<%= jade.dev.files %>',
      options: {
        data: '<%= pageSettings %>',
        pretty: true,
        selfClose: true,
        compileDebug: false
      }
    }
  };
};
