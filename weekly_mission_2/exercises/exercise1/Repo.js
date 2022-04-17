class Repository {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
     this.name = name
     this.author = author
     this.language = language
     this.numberOfCommits = numberOfCommits
     this.stars = stars
     this.forks = forks
     this.issues_open = issues_open
     this.issues_close = issues_close
    }
  
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
    getTotalIssues(){
        return this.issues_open + this.issues_close
    }
  }

  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("Playbook", "monseeligio", "js", 0, 0,0,0,0)
  console.log(myRepo.getGeneralInfo())
  console.log("Total Issues: " +myRepo.getTotalIssues())
