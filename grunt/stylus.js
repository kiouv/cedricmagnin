/*global module:false*/
module.exports = function() {
  return {
    dev:{
      files: [{
        expand: true,
        cwd: 'styles/stylus',
        src: [ '**/*.styl', '!**/_*.styl', '!_*/**/*.*' ],
        dest: '<%= build %>/css',
        ext: '.css'
      }],
      options: {
        compress: false,
        paths: ["styles"]
      }
    },
    release: {
      files: '<%= stylus.dev.files %>'
    }
  };
};
