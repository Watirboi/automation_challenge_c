pipeline {
  agent any
  triggers {
      cron('H */4 ** 1-5')
  }
    
  //tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        echo 'Getting Repository.'
        git branch: 'main', url: 'https://github.com/Watirboi/automation_challenge_c.git'
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