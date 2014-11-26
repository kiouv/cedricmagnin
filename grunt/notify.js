/*global module:false*/
module.exports = {
  default: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "All went fine"
    }
  },
  dev: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Dev files ready"
    }
  },
  jade: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Jade files compiled"
    }
  },
  js: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Javascript files compiled"
    }
  },
  medias: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Medias copied"
    }
  },
  release: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Release complete"
    }
  },
  server: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Watching files\rServer started on port 3000"
    }
  },
  less: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Less files compiled"
    }
  },
  stylus: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Stylus files compiled"
    }
  },
  sprite: {
    options: {
      title: "<%= package.title || package.name %>",
      message: "Sprites done"
    }
  }
};
