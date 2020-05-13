const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routes/userRoute')
app.get('/', (req,res) => {
    res.send('Olá mundo pelo Express!')
})
app.listen(port, () => console.log('App rodando na porta 3000!'))