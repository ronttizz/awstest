pipeline {
    agent any

    stages {
        stage("build"){
            steps{
                sh 'npm install'
                echo 'building app...'

            }
        }
        stage("test"){
            steps{
                echo 'testing app...'
            }

        }
        stage("deliver"){
            steps{
                echo 'delivering app...'
            }

        }

    }
} 