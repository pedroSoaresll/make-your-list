module.exports = {
  ci: {
    collect: {
      staticDistDir: 'build',
      url: '/',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
