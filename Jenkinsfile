pipeline {
  agent any
  environment {
    PATH = "${tool 'NodeJS'}/bin:${env.PATH}"
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