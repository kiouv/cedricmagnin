/*global module:false*/
module.exports = function( grunt ){
  grunt.registerTask( 'js', function( target ){
    target = target || 'dev';
    var tasks = {
      dev: [
        'jshint:dev',
        'concat',
        'notify:js'
      ],
      release: [
        'jshint:release',
        'concat',
        'uglify',
        'notify:js'
      ]
    };

    grunt.task.run( tasks[ target ] );
  } );
};
