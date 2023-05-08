//### Aqui será verificado os acessos do usuario ###
const express = require('express');
const User = require('../Models/User');

UserRouter = express.Router();

//cria um usuario
UserRouter.post("/new", async (require, response)=>{
    let {user, password, name, email} = require.body;
    let newUser = new User({user, password, name, email});
    try{
        await newUser.save();
        response.send("Usuario cadastrado!");
    }catch(error){
        response.send("usuario já cadastrado");
    }
})

//retorna todos os usuarios
UserRouter.get("/", async (require, response)=>{
    try{
        let users = await User.find();
        response.send(users)
    }catch(error){
        console.log(error);
    }
})

//deleta um usuario
UserRouter.get("/:id/remove", async (require, response)=>{
    // try{
    //     let users = await User.find();
    //     response.send(users)
    // }catch(error){
    //     console.log(error);
    // }
})

module.exports = UserRouter;

