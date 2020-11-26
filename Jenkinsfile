pipeline {
  environment {
    VERSION = 1
    PROJECT = "reactapp"
    IMAGE = "$PROJECT:$VERSION"
    ECRURL="https://780862318210.dkr.ecr.ap-south-1.amazonaws.com"
    ECRCRED = 'ecr:ap-south-1:awscred'
    registry = "milan"
    registryCredential = 'awscred'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Get SCM') {
      steps { 
        sh 'rm -f ReactJsApp'
        sh 'git clone https://github.com/SakthiDhandapani/ReactJsApp.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          docker.build($BUILD_NUMBER)
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( 'ECRURL', 'ECRCRED' ) {
            docker.image(IMAGE).push()
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
