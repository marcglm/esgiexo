 const express = require('express') //utilisation d'express
const app = express() //Initialisation d'express

app.get('/', function (req, res) {  //
  res.send('Hello World!')
})

app.get('/hello', function (req, res) {  //
console.log('params', req.query.nom)
if (req.query.nom){
	res.send(`Bonjour , ${req.query.nom} !`)
}else{
	res.send('Quelle est votre nom?')

}

})
app.listen(process.env.PORT||3000, function () { // ecoute sur le port 3000 
  console.log('Example app listening on port 3000!')
})
