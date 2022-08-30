pipeline {
    agent any
    stages {
        stage {
            steps ("build") {
                echo "building my app..."
            }
        }
        stage ("test") {
            steps {
                echo "Testing my app..."
            }

        }
        stage ("deploy") {
            steps {
                echo "Deploying my app..."
            }
        }
    }
}