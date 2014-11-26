/*global module:false*/
module.exports = function( grunt ){
  grunt.registerTask( 'dev', function(){
    grunt.task.run( [
      'clean:build',
      'copy:files',
      'copy:config',
      // 'less:dev',
      'stylus:dev',
      'autoprefixer:dev',
      'jade:dev',
      'js:dev',
      'notify:dev'
    ] );
  } );
};
