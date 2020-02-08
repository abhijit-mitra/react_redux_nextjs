console.log('---------------', process.env.CONFG_ENV);
module.exports={
  env: require(`./env/${process.env.CONFG_ENV}`)
}
