const AWS = require('aws-sdk')
const config = require('./config')
const constants = require('./constants')

const api = {
  configureAWS
}

function configureAWS () {
  AWS.config.region = constants.defaultAwsRegion
  if (config.environmentIdParam === 'local') {
    AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: config.system })
  }
  return AWS
}

module.exports = api
