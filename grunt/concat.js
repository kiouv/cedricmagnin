/* global module: false */
module.exports = {
  options: {
    stripBanners: true
  },
  dist: {
    src: '<%= scripts %>',
    dest: '<%= build %>js/scripts.js'
  }
};
