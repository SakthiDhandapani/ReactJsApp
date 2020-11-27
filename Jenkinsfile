pipeline
{
    options
    {
        buildDiscarder(logRotator(numToKeepStr: '3'))
    }

    agent any
    environment 
    {
        PROJECT = 'front_end-19'
        ECRURL = 'http://780862318210.dkr.ecr.ap-south-1.amazonaws.com'
        ECRCRED = 'ecr:ap-south-1:awscred'
    }
    stages
    {
        stage('Docker image pull')
        {
            steps
            {
                script
                {
                    sh("eval \$(aws ecr get-login --no-include-email | sed 's|https://||')")
                    docker.withRegistry(ECRURL, ECRCRED)
                    {
                        docker.image(PROJECT).pull()
                    }
                }
            }
        }
    }
}
