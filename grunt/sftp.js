module.exports = {
  deploy: {
    files: {
      "./": "<%= build %>/**"
    },
    options: {
      srcBasePath: "<%= build %>/",
      createDirectories: true,
      host: '<%= secret.host %>',
      port: 22,
      username: '<%= secret.username %>',
      password: '<%= secret.password %>',
      path: '<%= secret.path %>',
      showProgress: true
    }
  }
};
