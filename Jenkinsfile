pipeline {
  environment {
    registry = "milan"
    registryCredential = 'awscred'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Get SCM') {
      steps {
        sh 'rm -rf ReactJsApp'
        git 'https://github.com/SakthiDhandapani/ReactJsApp.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( 'https://780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
