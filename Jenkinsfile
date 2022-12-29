pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/tasneem-viabletree/express-route', branch: 'main')
      }
    }
    stage('Build') {
      steps {
        sh 'npm run test'
      }
    }

    

  }
  environment {
    PATH = "${tool 'Git'}/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}"
  }
}