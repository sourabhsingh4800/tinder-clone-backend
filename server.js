import express from "express";
import mongoose from "mongoose";
import cards from './db_cards.js';
import Cors from 'cors';
//App configuration
const app =express();
const port =process.env.PORT||8001 ;
const connection_url='mongodb+srv://admin:Sourabh1!@cluster0.xi1gu.mongodb.net/tinder-db?retryWrites=true&w=majority';





//Middlewares
app.use(express.json());
app.use(Cors());




//DB config
mongoose.connect(connection_url,{
  
})






//API Endpoint 
app.get('/',(req,res)=>res.status(200).send("HELLO WORLD THERE IS SOURABH SINGH"));
app.post('/tinder/cards',(req,res) =>
{
    const dbcard =req.body;
    cards.create(dbcard,(err,data)=>
    {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })

});
app.get('/tinder/cards',(req,res)=>
{
    const dbcard =req.body;
    cards.find((err,data)=>
    {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })

})








//Listener
app.listen(port, () => console.log('listening on location:'+port));