pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

    stages {
        stage('Parando los servicios...') {
            steps {
                sh '''
                    /usr/local/bin/docker compose -p exu2-cbdp down || true
                '''
            }
        }

        stage('Eliminando imagenes anteriores...') {
            steps {
                sh '''
                    /usr/local/bin/docker rmi client:v1.0.2 -f || true
                    /usr/local/bin/docker rmi operations:v1.0.2 -f || true
                '''
            }
        }

        stage('Obteniendo actualizacion...') {
            steps {
                checkout scm
            }
        }

        stage('Construyendo y desplegando servicios...') {
            steps {
                sh '''
                    cd $WORKSPACE
                    /usr/local/bin/docker compose -p exu2-cbdp up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado con exito'
        }

        failure {
            echo 'Hubo un error al ejecutar el pipeline'
        }

        always {
            echo 'Pipeline finalizado'
        }
    }
}