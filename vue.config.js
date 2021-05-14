module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/_variables.scss";`
      }
    }
  }
}
