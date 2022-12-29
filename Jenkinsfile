pipeline {
  agent any
  environment {
    PATH = "${tool 'Git'}/bin:${env.PATH}"
  }
  stages {
    stage('CheckoutCode') {
      steps {
        git(url: 'https://github.com/tasneem-viabletree/express-route', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'echo $PATH'
      }
    }

  }
  environment {
    PATH = '/Users/macbook/.nvm/versions/node/v19.0.0/bin/npm:/bin/sh'
  }
}