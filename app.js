const express = require('express')
const app = express()
const port = 3001

app.use(express.static("public"));

app.get('/home', (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
}) 

app.get('/movies', (req, res) => {
  res.sendFile(__dirname + "/views/movies.html")
})

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html")
}) 

app.get('/404', (req, res) => {
  res.sendFile(__dirname + "/views/404.html")
})  

app.get('/*', (req, res)=>{
    res.sendFile(__dirname + "/views/404.html");
})

app.listen(port, () => {
  console.log(`Listening on Mich's port ${port}`)
})