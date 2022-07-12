module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start:lighthouse',
      url: ['http://localhost:3000'],
      // staticDistDir: 'build',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Cannot check these tests on local Http server through Lighthouse CI
        'uses-http2': ['off', {}],
        'uses-long-cache-ttl': ['off', {}],
        canonical: ['off', {}],
        'uses-rel-preconnect': ['warn', {}],
        'unused-javascript': ['warn', {}],
        'non-composited-animations': ['warn', {}],
        'errors-in-console': ['warn', {}],
        'csp-xss': ['warn', {}],
      },
    },
  },
}
