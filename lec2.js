// fs(library)==It creates a file and writes a message inside it
// os(library)==It gives the details about the user and machine

var fs=require('fs');
// var notes=require('./notes.js')   //How to import any file in current file

var os=require('os');

var _ =require('lodash');  //Lodash is a Java script library which is helping in dealing with data for example filtering the array
const age = require('./notes.js');
var user=os.userInfo();
// console.log(user);
console.log(user.username);
fs.appendFile('greetigf.txt','hii'+user.username+'!\n',()=>{
    console.log('file is created')
});

// console.log(os);
// console.log(fs);
console.log(age);

let a=[1,2,3,5,5,'ram','rahul','rahul']

let b= _.uniq(a);  //Example of lodash

console.log(b);

