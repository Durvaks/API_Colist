//### Aqui será verificado os acessos do usuario ###
const express = require('express');
const User = require('../Models/User');

UserRouter = express.Router();

UserRouter.get("/", async (require, response)=>{
    try{
        let users = await User.find();
        response.send(users)
    }catch(error){
        console.log(error);
    }
})

module.exports = UserRouter;

