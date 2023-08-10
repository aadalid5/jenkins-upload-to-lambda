def mainBranch = "main"

pipeline {
    agent any

    stages {
        stage('branchname') {
            steps{
                echo env.BRANCH_NAME
            }
        }

        stage('test') {
            when {
                branch mainBranch
            }

            steps {
                echo "inside testing"
            }
        }
    }
}