const api = {
  cliJobIds: {
    firstFunction: 'first_function'
  },
  endPoints: {
    dev: {
    },
    staging: {
    },
    prod: {
    }
  },
  environments: {
    local: 'local',
    jenkins: 'jenkins',
    lambda: 'lambda',
    test: 'test'
  },
  systems: {
    dev: 'dev',
    staging: 'staging',
    prod: 'prod'
  },
  defaultAwsRegion: 'eu-central-1',
  awsSnsTargetArn: {
    dev: 'arn:aws:sns:eu-central-1:............',
    staging: 'arn:aws:sns:eu-central-1:.........',
    prod: 'arn:aws:sns:eu-central-1:......'
  }
}

module.exports = api
