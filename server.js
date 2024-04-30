const express = require ("express") ;
const fs = require ("fs") ;
const v = require ("v") ; 
const app = express ; 
const PORT = 4500 ; 

// les route 
app.get ("/" ,v, (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/Homepage.html" ,v, (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/OurService.html" ,v , (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;

app.get ("/ContactUs" ,v, (req , res ) => {
    fs.readFile("./Homepage.html" ,"utf-8", (err, data) =>{
        err ? res.end ("FILE NOT FOUND")  && console.error ( err) : res.send(data) ; 
    } );

}) ;
 app.listen (PORT , (req, res)=> {
    console.log (`Server running : port ${PORT}`)
 }) ;
 

