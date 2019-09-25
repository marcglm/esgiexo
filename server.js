
const express = require('express') //utilisation d'express
const app = express() //Initialisation d'express

app.get('/', function (req, res) {  //
  res.send('Hello World!')
})

app.listen(3000, function () { // ecoute sur le port 3000 
  console.log('Example app listening on port 3000!')
})
