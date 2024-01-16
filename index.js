import express from "express";
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.get('/home',(req,res)=>{
    res.send('<h1>Welcome To Home</h1>')
})

app.listen(port,()=>{
    console.log(`Listening at Port-${port}`)
})