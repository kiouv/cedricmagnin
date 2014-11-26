module.exports = function(grunt){
  grunt.initConfig({
    // don't keep passwords in source control
    secret: grunt.file.readJSON('grunt/ssh.json'),
    sshexec: {
      uptime: {
        command: "uptime",
        options: {
          host: "<%= secret.host %>",
          port: 22,
          username: "<%= secret.username %>",
          password: "<%= secret.password %>",
          path: "<%= secret.path %>"
        }
      }
    },
    // our sftp file copy config
    sftp: {
      deploy: {
        files: {
          "./": "publish/**"
        },
        options: {
          srcBasePath: "publish/",
          createDirectories: true,
          showProgress: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ssh');
  grunt.registerTask('deploy', [
    'sshexec:uptime',
    'sftp:deploy'
  ]);

};
