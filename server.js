let dotenv = require('dotenv').config()

const express = require('express')
const path = require('path');
const tokenCheck = require('./middleware/tokenHandler');


const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');


app.use(tokenCheck)
// ROOT ROUTE
app.get('/',(req,res)=>{
    res.render('login.ejs')
})


app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server Running at ${process.env.PORT}`)
})