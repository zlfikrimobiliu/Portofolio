module.exports = {
  apps: [
    {
      name: 'fikrimobiliu-site',
      cwd: '/home/fikrimobiliu/htdocs/fikrimobiliu.site',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: '7000'
      },
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      max_memory_restart: '512M',
      time: true
    }
  ]
}

