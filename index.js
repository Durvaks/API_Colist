const express = require("express");
const Users = require('./Routes/User')
require('./Config/Database');

const App = express();

App.listen(3333,()=>{
    console.log("conectado a porta 3333")
});

App.use(express.json());
App.use('/user', Users)