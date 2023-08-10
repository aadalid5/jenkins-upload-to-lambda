def mainBranch = "main"

pipeline {
    agent any

    stages {
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