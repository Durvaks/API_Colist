const express = require('express');
const Tasklist = require('../Models/Tasklist');


const TaskListRouter = express.Router();

//cria uma nova tarefa
TaskListRouter.post("/new",(require, response)=>{    
    let {name, creator} = require.body;
    let newTasklist = new Tasklist({name, creator})
    try{
        newTasklist.save()
    }catch(error){

    }

})
//retorna todas as listas de tarefa
TaskListRouter.get("/",(require, response)=>{

})

module.exports = TaskListRouter;