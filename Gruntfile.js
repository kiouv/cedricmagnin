/*global module:false*/
module.exports = function( grunt ){

  // test GIT branch: if release, publish folder name = "release", else "publish"
  var buildDir = 'publish/',
      branch,
      head,
      pageSettings = grunt.file.readJSON('pages/vars.json'),
      scripts = ['scripts/tools/*.js', '!scripts/vendors/*.js', '!scripts/conf.js', 'scripts/libs/*.js', 'scripts/init.js'];

  if( grunt.file.exists( '.git/HEAD' ) ){
    head = grunt.file.read( '.git/HEAD' ).replace(/\n/, '').split( '/' );
    branch = head[ head.length - 1 ].toLowerCase();
  }

  if( branch === "release" ){
    buildDir = 'release/';
  }

  // default grunt configuration
  var defaults = {
    secret: grunt.file.readJSON('grunt/ssh.json'),
    build: buildDir,
    scripts: scripts,
    pageSettings: pageSettings,
    jadeVars: grunt.util._.extend( {},
      pageSettings,
      { 'scripts': grunt.file.expandMapping(scripts, '/js', { rename: function( dest, matchedSrcPath ){
        return matchedSrcPath.replace( 'scripts', dest );
      }}) }
    ),
    verbose: true,
    paths: {
      dyn: 'medias/dyn',
      img: 'medias/imgs'
    }
  };
  require('load-grunt-config')(grunt, {
      config: defaults,
      loadGruntTasks: {
        pattern: [ 'grunt-*' ],
        scope: "devDependencies"
      }
  });

  grunt.registerTask( 'default', ["notify:default"]);

};


