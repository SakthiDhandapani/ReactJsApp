pipeline {
  environment {
    registry = "milan"
    registryCredential = 'awscred'
    dockerImage = ''
    VERSION = "$BUILD_NUMBER"
    PROJECT = 'milan'
    IMAGE = "$PROJECT:$VERSION"
    ECRURL = 'https://780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan'
    ECRCRED = 'ecr:ap-south-1:awscred'
  }
  agent any
  stages {
    stage('Get SCM') {
      steps {
        sh 'rm -rf ReactJsApp' 
        sh 'git clone https://github.com/DPMadhavan/ReactJsApp.git'
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
            docker.withRegistry(ECRURL,ECRCRED) {
            dockerImage.push()          
          }
        }
      }
    }
    stage('Pull Image') {
      steps{
        script {
            docker.withRegistry(ECRURL,ECRCRED) {
            dockerImage.pull()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
        sh "docker run -d --name $registry:$BUILD_NUMBER -p 9001:9001 ${ECR_URL}+${ECRCRED}"
      }
    }
  }
}
