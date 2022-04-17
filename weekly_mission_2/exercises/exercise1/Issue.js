class Issue {

    constructor(title, repositoryNameAssociated, status1, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title =title
        this.repositoryNameAssociated= repositoryNameAssociated
        this.status1= status1
        this.numberOfComments= numberOfComments
        this.labels= labels
        this.author=author
        this.dateCreated= dateCreated
        this.lastUpdated= lastUpdated
      }

    getTitleAndAuthor(){
        return this.title +" "+ this.author
    }
    getGeneralInfo(){
        return `This  is in the repo: ${this.repositoryNameAssociated} (status: ${this.status}) and was created on ${this.dateCreated}`
    }    
}

  console.log("Ejemplo 3: Clase Issue")
  const Issue1 = new Issue("02 Live 2 semana 1","MissionNodeJS",true,103, 3, "carlogilmar", "03-04-2022", "07-04-2022")
  console.log("Title and author: "+Issue1.getTitleAndAuthor())
  console.log("General Information "+Issue1.getGeneralInfo())

