def mainBranch = "main" // for multibranch pipelines

pipeline {
    agent any

    stages {
        stage('branchname') {
            steps{
                script{
                    sh "echo ${env.BRANCH_NAME}"
                    sh "echo ${env.CHANGE_TARGET}"
                }
            }
        }
    }
}