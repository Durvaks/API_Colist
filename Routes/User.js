//### Aqui será verificado os acessos do usuario ###
const express = require('express');
const User = require('../Models/User');

const _FrontEnd = {
    login: "http://localhost:3000/",
    index: "http://localhost:3000/"
}

UserRouter = express.Router();

//cria um usuario
UserRouter.post("/new", async (require, response) => {
    let { user, password, name, email } = require.body;
    let newUser = new User({ user, password, name, email });
    try {
        await newUser.save();
        response.redirect(_FrontEnd.login);
    } catch (error) {
        response.send("usuario já cadastrado");
    }
})

//retorna todos os usuarios
UserRouter.get("/get-all-users", async (require, response) => {
    try {
        let users = await User.find();
        response.send(users.map((user) => { return user._id }))
    } catch (error) {
        console.log(error);
    }
})

UserRouter.get("/authenticate/:id", async (require, response) => {
    const idUser = require.params.id;
    response.setHeader('Access-Control-Allow-Origin', '*');
    try {
        let finded = await User.findById(idUser);
        if (finded) {
            response.json({Logged: true})
        } else {
            response.json({Logged: false})
        }
    } catch (error) {
        response.json({Logged: false})
    }
})

//deleta um usuario
UserRouter.delete("/:id/remove", async (require, response) => {
    const userIDToRemove = require.params.id;
    try {
        let removedUser = await User.findByIdAndDelete(userIDToRemove);

        response.send(`Removed User: ${removedUser.name}`);
    } catch (error) {
        responde.send(error);
    }

})
//deleta todos os usuarios
UserRouter.delete("/remove-all-users", async (require, response) => {
    try {
        await User.deleteMany({})
        response.send("All users removed");
    } catch (error) {
        responde.send(error);
    }
})

//Gera o token que mantem o usuario logado
UserRouter.post("/login", async (require, response) => {
    let { user, password } = require.body;
    try {
        let findedUser = await User.findOne({ user: user })
        if (findedUser.password == password) {
            response.cookie('colistPass', `${findedUser._id}`);
            response.redirect(_FrontEnd.index);
        } else {
            response.send("Senha incorreta")
        }
    } catch (error) {
        response.send("Usuario não Encontrado");
    }
})

// UserRouter.get("/logout", (require,response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     response.redirect(_FrontEnd.login);
// })

module.exports = UserRouter;

