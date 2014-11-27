module.exports = {
  deploy: {
    files: {
      "./": "release/**"
    },
    options: {
      srcBasePath: "release/",
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
