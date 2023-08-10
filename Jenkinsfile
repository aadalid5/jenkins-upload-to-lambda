def mainBranch = "main" // for multibranch pipelines

pipeline {
    agent any

    stages {
        stage('branchname') {
            steps{
                script{
                    echo "${env.BRANCH_NAME}"
                    echo "${env.CHANGE_TARGET}"
                }
            }
        }
    }
}