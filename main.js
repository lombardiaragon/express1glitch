const express=require('express')
const db = require("./db.js");
const app=express()

// middleware https://expressjs.com/es/api.html#express.urlencoded
app.use(express.urlencoded());
// middleware https://expressjs.com/es/api.html#express.json
app.use(express.json());
//* request/ response
const DB = new db("data");

// * RUTAS

// root
app.get('/',(req,res)=>{
    res.send('BIENVENIDO A MI PRIMER SERVIDOR')
})

// /productos - getAll
app.get('/productos',async (req,res)=>{
    // res.send('productos')
    const data= await DB.getAll()
    return res.send(data)
})

// /productosRandom
app.get('/productosRandom',async (req,res)=>{
    // res.send('productosRandom')
    const data= await DB.getAll()
    const randomProd=Math.floor(Math.random()*data.length)
    // console.log(randomProd)
    return res.send(data[randomProd])
})

app.listen(8080,()=>{
    console.log('iniciado')
})