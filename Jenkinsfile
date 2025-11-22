pipeline {
    agent any

    stages {
        stage('Parando los servicios...') {
            steps {
                sh '''
                    docker compose -p exu2-cbdp down || true
                '''
            }
        }

        stage('Eliminando imágenes anteriores...') {
            steps {
                sh '''
                    docker images --filter "label=com.docker.compose.project=exu2-cbdp" -q | xargs -r docker rmi -f || echo "No hay imagenes por eliminar"
                '''
            }
        }

        stage('Obteniendo actualización...') {
            steps {
                checkout scm
            }
        }

        stage('Construyendo y desplegando servicios...') {
            steps {
                sh '''
                    docker compose -p exu2-cbdp up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado con éxito'
        }

        failure {
            echo 'Hubo un error al ejecutar el pipeline'
        }

        always {
            echo 'Pipeline finalizado'
        }
    }
}