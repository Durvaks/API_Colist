const express = require("express");
require('./Config/Database');

const App = express();

App.listen(3333,()=>{
    console.log("conectado a porta 3333")
});

App.use(express.json());

App.get("/",(require, response)=>{
    response.send({
        Test: 'testando'
    })
})