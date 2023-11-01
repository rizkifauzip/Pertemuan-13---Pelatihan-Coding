const express = require("express");
const app = express();

const port = 3000;

app.get ('/', (req,res) =>{
    res.sendFile('index.html',{root:__dirname})
})

app.get ('/contact', (req,res) =>{
    res.sendFile('contact.html',{root:__dirname})
})
app.get ('/about', (req,res) =>{
    res.sendFile('about.html',{root:__dirname})
})
//parameter harus diisi, sedangkan query tidak
app.get ('/produk/:id', (req,res) => {
    res.send(`produk : ${req.params.id} <br> category id : ${req.query.category}`)
})

app.use('/',(req,res) => {
        res.status(404)
        res.send ('Page Not Found : 404 ')
})

app.listen(port,()=>{
    console.log(`Server Running at http://localhost:${port}`);
})