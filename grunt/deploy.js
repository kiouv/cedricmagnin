/* global module:false */
module.exports = function( grunt ){

  grunt.registerTask( 'old-deploy', function(){

    grunt.config.set( 'notify.deploy', {
      options: {
        title: "<%= package.title || package.name %>",
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
          dest: '../_deploy/<%= package.name %>/private/'
        },
        {
          expand: true,
          cwd: 'publish',
          src: [ '**/*' ],
          dest: '../_deploy/<%= package.name %>/www'
        }
      ]
    } );

    grunt.task.run( [
      'clean:deploy',
      'release',
      'copy:deploy',
      'notify:deploy'
    ] );

  } );

};
