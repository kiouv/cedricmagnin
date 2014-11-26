/*global module:false*/
module.exports = function() {
  return {
    dev:{
      files: [{
        expand: true,
        cwd: 'styles/less',
        src: [ '**/*.less', '!**/_*.less', '!_*/**/*.*' ],
        dest: '<%= build %>/css',
        ext: '.css'
      }],
      options: {
        paths: ["styles"]
      }
    },
    release: {
      files: '<%= less.dev.files %>'
    }
  };
};
