pipeline {
   agent any
    stages {
             stage('Clone Repo and Clean it') {
            steps {
		sh 'rm -rf ReactJsApp'                
                sh 'git clone https://github.com/SakthiDhandapani/ReactJsApp.git'
            }
        }
        stage('Build And Move To ECR') { 
            steps {
             sh 'docker build --tag="front_end-"$BUILD_ID:"front_end-"$BUILD_ID .'
	     sh 'docker tag "front_end-"$BUILD_ID:"front_end-"$BUILD_ID 780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan:"front_end-"$BUILD_ID'
             sh '("eval \$(aws ecr get-login --no-include-email | sed 's|https://||')")'
             sh 'docker push 780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan:"front_end-"$BUILD_ID'
            }
        }
	    
	stage('PULL from ECR') { 
            steps {
             sh '("eval \$(aws ecr get-login --no-include-email | sed 's|https://||')")'
             sh 'docker pull 780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan:"front_end-"$BUILD_ID'
            }
        }
	    
	 stage('Run On EC2') { 
            steps {
             sh 'docker stop front-end-react'
             sh 'docker rm front-end-react'
	     sh 'docker run -d --name  front-end-react 780862318210.dkr.ecr.ap-south-1.amazonaws.com/milan:"front_end-"$BUILD_ID'
            }
        }
    }
}
