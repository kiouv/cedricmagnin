/*global module:false*/
module.exports = {
  medias: {
    files: [{
       // Enable dynamic expansion
      expand: true,
      // Src matches are relative to this path
      cwd: 'medias',
      // Actual patterns to match
      src: ['{img,dyn}/**/*.svg', '!{img,dyn}/_*/*.svg'],
      // Destination path prefix
      dest: '<%= build %>medias/'
    }]
  }
};
