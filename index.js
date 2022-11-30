const express = require('express')
const app = express()
const port = 3009


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')

app.listen(port, () => {
  console.log(`Conectado al puerto ${port}`)
})


app.use('/', require('./routes/rutas'));

  app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/views/templates/404.html')
  })