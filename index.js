const express = require("express");
const MercadoPago = require("mercadopago");

const app = express()


MercadoPago.configure({
    sandbox:true,
    access_token: 'ff8080814c11e237014c1ff593b57b4d'
})

app.get("/",(req,res)=>{
    res.send("ola mercado!")
})

app.get("/pagar", (req,res)=>{
    let dados ={
        itens:[
            item = {
                id: ""+ Date.now(),
                description: "2x video games",
                quantity:1,
                currency_id: 'BRL',
                unit_price:
            }
        ]
    }
})



app.listen(3000,(req,res)=>{
    console.log("Server start!");
})