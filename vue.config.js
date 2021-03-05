module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/sass/main.scss";
        `
      }
    }
  }
}
