/* global module:false */
module.exports = function( grunt ){

  grunt.registerTask( 'deploy', function(){

    grunt.config.set( 'notify.deploy', {
      options: {
        title: "<%= pkg.title || pkg.name %>",
        message: "Project deployed"
      }
    } );

    grunt.config.set( 'copy.deploy', {
      files: [
        {
          expand: true,
          src: [
            'config.json',
            'styles/**/*',
            'js/**/*',
            'medias/**/*',
            'pages/**/*'
          ],
          dest: '../clients/test/private/'
        },
        {
          expand: true,
          cwd: 'publish',
          src: [ '**/*' ],
          dest: '../clients/test/www'
        }
      ]
    } );

    grunt.task.run( [
      'release',
      'copy:deploy',
      'notify:deploy'
    ] );

  } );

};
