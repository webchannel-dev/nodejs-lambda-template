const environment = require('./configs/environment')
const constants = require('./configs/constants')
const config = require('./configs/config')
const runParams = require('./configs/mockRunParamsForLocalEnvironment')

const firstFunction = require('./function/index')

init()

function init () {
  const jobId = process.argv[2]
  switch (jobId) {
    case constants.cliJobIds.netentLogin:
      firstFunction.handler('Event', 'Context', 'Call Back Function')
      break
    default:
      environment.terminateProcessWithFailure('CLI arguments do not contain a valid job id.')
  }
}

function assignProcessParams (params) {
  config.environmentIdParam = params.environment
  environment.init(params.environment)
  config.initSystem(params.system)
}
