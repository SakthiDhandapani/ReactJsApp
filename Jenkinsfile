pipeline {
   agent any
    stages {
             stage('Clone Repo and Clean it') {
            steps {
		sh 'rm -rf ReactJsApp'                
                sh 'git clone https://github.com/SakthiDhandapani/ReactJsApp.git'
            }
        }
        stage('Build') { 
            steps {
              docker.build("myImage:${env.BUILD_ID}")
            }
        }
    }
}
