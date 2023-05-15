const ignore_watch = ['node_modules', '.git', 'upload', 'doc']

module.exports = {
  apps: [
    {
      name: 'server',
      script: 'index.js',
      watch: ['.'],
      watch_delay: 1000,
      args: ['--color', '--watch'],
      ignore_watch,
      env: {
        ENVIRONMENT: 'pro',
        NAME: 'server'
      },
    },
  ]
}
