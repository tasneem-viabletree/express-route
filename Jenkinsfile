pipeline {
  agent any
  environment {
    PATH = "/Users/macbook/.nvm/versions/node/v19.0.0/bin/NPM"
  }
  stages {
    stage('CheckoutCode') {
      steps {
        git(url: 'https://github.com/tasneem-viabletree/express-route', branch: 'main')
      }
    }

    stage('Tests') {
      steps {
        sh 'npm run test'
      }
    }

  }
}