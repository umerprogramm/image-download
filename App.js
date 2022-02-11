const express = require('express')
const app = express()
const os = require('os');
const path = require('path')
const port = 3000
app.set("view engine", "ejs")

app.get('/', (req, res) => {
res.render('index')
})
app.get('/s', (req, res) => {
  res.send(req.body.download)
  })

app.listen(port, () => {
  
  console.log(`App listening on port ${port}`)
})

