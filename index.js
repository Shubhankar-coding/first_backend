require('dotenv').config()
const express = require('express')
const app = express()
const port=3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/login',function(req,res){
    res.send('<h1> this is my heading</h1>')
})

app.listen(process.env.PORT,()=>{
console.log(`listening on port ${port}`)
})