/*global module:false*/
module.exports = function( grunt ){
  return {
    release: {
      options: {
        baseUrl: './js',
        mainConfigFile: './js/init.js',
        dir: '<%= build %>/js',
        modules: [
          {
            name: 'init',
            include: grunt.option( 'scripts' )
          }
        ],
        inlineText: true,
        keepBuildDir: false,
        optimize: 'uglify2',
        preserveLicenseComments: false,
        removeCombined: true,
        wrap: true
      }
    }
  };
};
