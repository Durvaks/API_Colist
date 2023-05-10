const express = require("express");
const Users = require('./Routes/User')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');

require('./Config/Database');

const App = express();

App.listen(3333,()=>{
    console.log("conectado a porta 3333")
});

App.use(methodOverride('_method', {methods:['POST', 'GET']}));
App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(cookieParser());

App.use('/user', Users)