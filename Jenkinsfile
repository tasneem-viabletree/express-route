pipeline {
  agent any
  stages {
    stage('CheckoutCode') {
      steps {
        git(url: 'https://github.com/tasneem-viabletree/express-route', branch: 'main')
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm run test'
      }
    }

  }
}