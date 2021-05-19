module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "~@/styles/scss-utilities" as *;`
      }
    }
  }
}
