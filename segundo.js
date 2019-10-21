'use strict'
const express= require('express')
const colors= require('colors')
const jala=express()

app.get('/',(req,res) => {
    console.log("Ha entrado a la ruta /")
})

var port= 8080
jala.listen(port,() =>{
    console.log("La app corre en http://localhost:8080")
})