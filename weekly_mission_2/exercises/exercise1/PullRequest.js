class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
      this.title = title
      this.branchName = branchName
      this.dateCreated = dateCreated 
      this.status=status
      this.repositoryNameAssociated = repositoryNameAssociated
      }
  
      getStatus(){
        return this.status
      }
    getTitleAndAutor(){
      return `This PullRequest ${this.title} was created by ${this.branchName}`
      }
  }
  
  console.log("Ejemplo 3: PullRequest Class")
  const myPR1 = new PullRequest("Agregando mi blog", "main", "10-04-2022", "Verified", "launch-x-explorers")
  console.log(myPR1.getStatus())
  console.log(myPR1.getTitleAndAutor())