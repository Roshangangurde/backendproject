require('dotenv').config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('first demo!')
})

app.get('/login',(req, res) => {
   res.send('<h1>Hello world</h1>')
})

app.get('/signup',(req, res) => {
    res.send('<h1>Hello Register here</h1>')
 })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})