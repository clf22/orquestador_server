module.exports = {
  apps: [
    {
      name: 'index',
      script: 'index.js',
      watch: ['.'],
      watch_delay: 1000,
      args: ['--color'],
      ignore_watch: ['node_modules', '.git', 'upload'],
      env: {
        ENVIRONMENT: 'pro'
      },
      env_pre: {
        ENVIRONMENT: 'pre'
      }
    }
  ]
}
