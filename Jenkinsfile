pipeline {
  agent any
  stages {
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