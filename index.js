import express from "express";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path' ;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'node_basics.html');

app.get('/',(req,res)=>{
    res.sendFile(filePath)
})

app.get('/home',(req,res)=>{
    res.send('<h1>Welcome To Home</h1><a href="/">Go Back</a>')
})

app.listen(port,()=>{
    console.log(`Listening at Port-${port}`)
})
