module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "us-cdbr-east-03.cleardb.com",
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "timezone": "-03:00"
  },
  "test": {
    "username": "bef9c91a1eba82",
    "password": "53bf94c1",
    "database": "heroku_f7de784a4d84551",
    "host": "us-cdbr-east-03.cleardb.com",
    "port": 3306,
    "dialect": "mysql",
    "timezone": "-03:00"
  },
  "production": {
    "username": "bef9c91a1eba82",
    "password": "53bf94c1",
    "database": "heroku_f7de784a4d84551",
    "host": "us-cdbr-east-03.cleardb.com",
    "port": 3306,
    "dialect": "mysql",
    "timezone": "-03:00"
  }
}
