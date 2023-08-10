def mainBranch = "main" // for multibranch pipelines

pipeline {
    agent any

    stages {
        stage('branchname') {
            steps{
                echo env.CHANGE_TARGET
            }
        }
    }
}