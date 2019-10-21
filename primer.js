'use strict'
const express= require('express')
const jala=express()

var port= 8000
jala.listen(port,() =>{
    console.log("La app corre en http://localhost:8000")
})