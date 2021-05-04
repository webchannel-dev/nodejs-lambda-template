const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

// Create client outside of handler to reuse
const lambda = new AWS.Lambda()

// Handler
exports.handler = async function (event, context, callBack) {
  console.log(`## ENVIRONMENT VARIABLES: ${serialize(process.env)}`)
  console.log(`## CONTEXT: ${serialize(context)}`)
  console.log(`## EVENT: ${serialize(event)}`)
}

// Use SDK client
const getAccountSettings = function () {
  return lambda.getAccountSettings().promise()
}

var serialize = function (object) {
  return JSON.stringify(object, null, 2)
}
