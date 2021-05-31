pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        echo 'Getting Repository.'
        git 'https://github.com/Watirboi/automation_challenge_c.git'
      }
    }
     
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npx wdio'
      }
    }
  }
}