const Issue ={
    title: "02 Live 2 semana 1",
    repositoryNameAssociated: "MissionNodeJS",
    status1: true,
    numberOfComments: 103,
    labels: 3,
    author: "carlogilmar",
    dateCreated: "03-04-2022",
    lastUpdated: "07-04-2022",

    getTitleAndAuthor: function(){
        return this.title + this.author
      },
    getGeneralInfo: function(){
      return `This Issue ${this.title} was created by ${this.author}`
      }
     }

    console.log("Titulo de Issue:  " + Issue.title)
    console.log("Titulo y Autor: " + Issue.getTitleAndAuthor())
    console.log("Infomación General: " +Issue.getGeneralInfo())