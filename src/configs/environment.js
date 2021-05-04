const constants = require('./constants')

const api = {
  id: null,
  lambdaContext: null,
  lambdaCallback: null,
  init,
  terminateProcessWithFailure,
  terminateProcessSuccessfully
}

function init (idKey) {
  const formattedIdKey = idKey.toLowerCase()
  const validIdKeys = Object.keys(constants.environments)

  if (validIdKeys.indexOf(formattedIdKey) > -1) {
    api.id = constants.environments[formattedIdKey]
  } else {
    terminateProcessWithFailure(`Invalid environment id key: ${idKey}`)
  }
}

function terminateProcessSuccessfully (result) {
  terminateProcess(null, result)
}

function terminateProcessWithFailure (error, snsOptions) {
  if (error === null || error === void (0)) {
    error = 'terminating process with failure, but no error was provided'
  }
  terminateProcess(error)
}

function terminateProcess (error, result) {
  console.log('terminating process...')

  if (error === null) {
    const resultForConsole = (typeof result === 'string' ? result : JSON.stringify(result))
    console.log(`result: ${resultForConsole}`)

    if (api.id === constants.environments.lambda) {
      api.lambdaCallback(null, result)
    } else {
      process.exit(0)
    }
  } else {
    console.error(error)

    if (api.id === constants.environments.lambda) {
      api.lambdaCallback(error)
    } else {
      process.exit(1)
    }
  }
}

module.exports = api
