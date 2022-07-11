module.exports = {
  ci: {
    assert: {
      // preset: 'lighthouse:recommended',
    },
    collect: {
      startServerCommand: 'npm start',
      url: ['http://localhost:3000'],
    },
  },
}
