/*global module:false*/
module.exports = {
  config: {
    files: [
      {
      '<%= build %>/': [ 'datas/*' ]
      },
      {
        expand: true,
        cwd: 'scripts/',
        src: [ 'config.js', '**/config.js' ],
        dest: '<%= build %>js/'
      }
    ]
  },
  files: {
    files: [
      {
      '<%= build %>/': [ 'medias/**/*', '.htaccess', '.htpasswd', 'favicon.ico' ]
      },
      {
        expand: true,
        cwd: 'scripts/',
        src: [ 'vendors/*.js', 'config.js' ],
        dest: '<%= build %>js/'
      },
      {
        expand: true,
        cwd: 'scripts/',
        src: [ 'mail.php' ],
        dest: '<%= build %>'
      }
    ]
  },
  mail: {
    files: {
      '<%= build %>/': [ 'mail/**/*']
    }
  },
  css: {
    files: [{
        expand: true,
        cwd: 'styles/_legacy/css/',
        src: [ '**/*.css' ],
        dest: '<%= build %>css/'
    }]
  },
  js: {
    files: [{
        expand: true,
        cwd: 'scripts/',
        src: [ '**/*.js' ],
        dest: '<%= build %>js/'
    }]
  },
  php: {
    files: {
      '<%= build %>/': [ 'scripts/*.php']
    }
  },
  medias: {
    files: {
      '<%= build %>/': [ 'medias/**/*']
    }
  },
  img: {
    files: {
      '<%= build %>': [ 'medias/imgs/**/*', 'medias/dyn/**/*']
    }
  },
  fonts: {
    files: {
      '<%= build %>/': [ 'medias/fonts/**/*']
    }
  }
};
