/*global module:false*/
module.exports = function() {
  return {
    dev:{
      options: {
        browsers: ["last 2 versions", "> 1%", "Explorer 7", "Android 2"]
      },
      multiple_files: {
        options: {
            diff: true
        },
        expand: true,
        flatten: true,
        src: '<%= build %>/css/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: '<%= build %>/css/' // -> dest/css/file1.css, dest/css/file2.css
      }
    },
    release: {
      options: {
        browsers: ["last 2 versions", "> 1%", "Explorer 7", "Android 2"]
      },
      dist: {
        expand: true,
        flatten: true,
        cwd: "<%= build %>/css/",
        src: ["*.css"],
        dest: "<%= build %>/css/"
      }
    }
  };
};