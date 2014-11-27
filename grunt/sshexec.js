module.exports = {
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
};
