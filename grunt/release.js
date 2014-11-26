/* global module:false */
module.exports = function( grunt ) {

  var tasks = [
    'clean:build',
    'copy:files',
    'copy:config',
    'jade:release',
    'js:release',
    // 'less:release',
    'stylus:release',
    'autoprefixer:release',
    'cssmin:release',
    'imageoptim', // pngmin + imagemin + svgmin
    'treeview',
    'notify:release'
  ];

  grunt.registerTask( 'release', function(){

    grunt.task.run( tasks );

  } );
};
