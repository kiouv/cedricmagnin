module.exports = function(grunt){

  grunt.registerTask('deploy', [
    // 'sshexec:uptime',
    'sftp:deploy'
  ]);

};
