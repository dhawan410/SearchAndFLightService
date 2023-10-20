const express=require("express");
const {PORT}=require('./config/serverConfig');
const bodyparser=require("body-parser");
const CityRepository=require('./repository/city-repository');

const setupAndStartServer=async()=>{
    const app=express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT,async()=>{
        console.log(`server starred at ${PORT}`);
        

    });
}
setupAndStartServer();