module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `@use "~@/styles/scss-utilities";`
      }
    }
  }
}
