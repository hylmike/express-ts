module.exports =
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "michael",
  "password": "Pass@word123",
  "database": "express",
  "synchronize": true,
  "entities": [__dirname + "dist/entity/**/*.entity.js"]
  // "entities": ["src/entity/**/*.entity.ts"]
}
