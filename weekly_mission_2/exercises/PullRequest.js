const PullRequest = {
    title: "Agregando mi blog",
    branchName: "main",
    dateCreated: "10-04-2022",
    status1: "Verified",
    repositoryNameAssociated: "launch-x-explorers",
    getStatus: function(){
        return this.status1
      },
    getTitleAndAutor: function(){
      return `This PullRequest ${this.title} was created by ${this.branchName}`
      }

}
    console.log("Titulo de Pull Request:  " + PullRequest.title)
    console.log("Status " + PullRequest.getStatus())
    console.log("Infomación General: " +PullRequest.getTitleAndAutor())