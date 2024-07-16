//API and end point ::The waiter in a restaurant can be understand as a server and the menu card can be seen as api and the list written in the menu card or the items are endpoints of a api the server only knows those things which are written in its end point.Localhost can be seen as the home of a waiter.And the address of the waiter can be understand as the port number in our system.

//Express js is a popular framework or package which is used to build server

const express=require('express');
const app= express();
const db=require('./db.');
const Person=require('./models/Person');
const personRoutes=require('./routes/personRoutes');
const MenuItemsRoutes=require('./routes/MenuItemsRoutes');
const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send("Welcome to my hotel!,how can i help you?, we have list of menus"); 
})

app.listen(3000,()=>{                       //Due to app.listen is ready to listen on port of 3000
    console.log('server is listening  on port 3000');     
});

app.use('/person',personRoutes);
app.use('/menu',MenuItemsRoutes);


// {
// "name":"Alice",
// "age":28,
// "work":"chef",
// "mobile":"6453 rt5",
// "email":"grthrt",
// "address":"kargone",
// "salary": 600000
// }