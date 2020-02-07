const ENV = require('./env');

module.exports={
  env:ENV[process.env.CONFG_ENV]
}
