module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/scss-utilities";`
      }
    }
  }
}
