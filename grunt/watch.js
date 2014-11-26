/*global module:false*/
module.exports = function(){

  return {
    js: {
      files: [ 'scripts/**/*.js', '!scripts/config.js', '!scripts/**/config.js', '!scripts/assets/**/*' ],
      tasks: [ 'js:dev' ],
      options: {
        livereload: true,
        spawn: false
      }
    },
    config: {
      files: [ 'datas/*', 'scripts/config.js', 'scripts/**/config.js' ],
      tasks: [ 'copy:config' ],
      options: {
        livereload: true,
        spawn: false
      }
    },
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: [ 'jshint:gruntfile' ]
    },
    jade: {
      files: [ 'pages/vars.json', 'pages/**/*.jade' ],
      tasks: [ 'jade:dev', 'notify:jade' ],
      options: {
        livereload: true,
        spawn: false
      }
    },
    media: {
      files: [ 'medias/**/*','!medias/sprite' ],
      tasks: [ 'copy:img', 'notify:medias' ],
      options: {
        livereload: true,
        spawn: false
      }
    },
    less: {
      files: ['styles/less/**/*.less'],
      tasks: [ 'less:dev', 'notify:less' ],
      options: {
        livereload: true,
        spawn: false
      }
    },
    stylus: {
      files: ['styles/stylus/**/*.styl'],
      tasks: [ 'stylus:dev', 'notify:stylus' ],
      options: {
        livereload: true,
        spawn: false
      }
    }
  };
};
