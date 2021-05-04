const environment = require('./environment')
const constants = require('./constants')

const api = {
  initWithLambdaContext,
  initSystem,
  environmentIdParam: null,
  system: null,
  deviceType: null
}

function initWithLambdaContext (lambdaContext, lambdaCallback) {
  environment.init('lambda')
  environment.lambdaContext = lambdaContext
  environment.lambdaCallback = lambdaCallback

  const systemKey = resolveSystemKeyFromLambdaContext(lambdaContext)
  initSystem(systemKey)
}

function initSystem (systemKey) {
  const formattedSystemKey = systemKey.toLowerCase()
  const systemId = constants.systems[formattedSystemKey]

  if (typeof systemId !== 'undefined') {
    api.system = systemId
  } else {
    environment.terminateProcessWithFailure(`Attempt to configure an invalid system using key: ${systemKey}`)
  }
}

function resolveSystemKeyFromLambdaContext (lambdaContext) {
  const splitFunctionArn = lambdaContext.functionName.split('-')
  return splitFunctionArn[1].toLowerCase()
}

module.exports = api
