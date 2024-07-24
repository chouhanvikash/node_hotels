// This is lecture 4 plus lecture 5

// 1)About Mongodb
// a)graphical user interface
//2)POSTMAN
//get Method Through this we only give response to client it will serve only due response to client
//post Method through this the server server is able to take data from the client
//mongoose is Objected data modeling library for Mongodb and node js.

const mongoose= require('mongoose');
require('dotenv').config();
// const mongooseUrl= 'mongodb://127.0.0.1:27017'; 
//This URL is copied from Mongodb shell(which is local)

const mongooseUrl= process.env.MONGODB_URL;


mongoose.connect(mongooseUrl,{
    useNewUrlParser:true, //this is rule
    useUnifiedTopology:true, //this is rule
});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongodb server");
});

db.on('error',()=>{
    console.log("error");
});

db.on('disconnected',()=>{
    console.log("disconnected to mongodb server");
});

module.exports=db;
