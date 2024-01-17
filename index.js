const express = require('express')

const app = express() //creamos la aplicacion

app.get('/', (req, res)=>{
    res.send('<h1>HOLA MUNDO!!!</h1>')

})
app.get('/about', (req, res)=>{
    res.send('<h1>Acerca de!!!</h1>')

})






app.listen(3000)
console.log("SErver on port", 3000)

