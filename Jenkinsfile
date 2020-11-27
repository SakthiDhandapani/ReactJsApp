pipeline {
  environment {
    VERSION = 1
    PROJECT = "reactapp"
    IMAGE = "$PROJECT:$VERSION"
    ECRURL="https://780862318210.dkr.ecr.ap-south-1.amazonaws.com"
    ECRCRED = 'ecr:ap-south-1:awscred'
    registry = "https://780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan"
    registryCredential = 'awscred'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        script {
          docker image =docker.build registry +":$BUILD_NUMBER
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( 'ECRURL', 'ECRCRED' ) {
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
