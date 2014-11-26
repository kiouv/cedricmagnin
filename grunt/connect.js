/*global module:false */

module.exports = {
  server: {
    options: {
      port: 9000,
      base: '<%= build %>',
      keepalive: true,
      hostname: '*'
    }
  }
};
