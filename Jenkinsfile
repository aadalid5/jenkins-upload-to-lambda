def mainBranch = "main" // for multibranch pipelines

pipeline {
    agent any
    
    tools { nodejs 'node16' }
    
    stages {
        stage('Setup') {
            steps {
                cleanWs()
                checkout scm
            }
        }

        stage("Install Dependencies") {
            steps {
                sh "node -v"
                sh "npm ci"
            }
        }

        stage('Build') {
            steps {
                echo 'Building prod bundle:'
                sh 'npm run env:prod build'
            }
        }

        stage('Push') {
            steps {
                // sh 'npm run push:s3'
                sh 'npm run env:prod push'
                echo 'Changes successfully pushed to Prod.'
            }
        }

        // stage('deploy'){
        //     steps{
        //         sh 'npm run env:prod deploy'
        //         echo 'Changes successfully deployed to Prod.'   
        //     }
        // }

        // stage('publish'){
        //     steps{
        //         sh 'npm run env:prod publish'
        //         echo 'Changes successfully published to Prod.'
        //     }
        // }
    }
}