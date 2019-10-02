const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-axjxd.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = acessar query params (para filtros)
// req.params = acessar route params (edição, delete)
// req.body = acessar corpo da requisição (criação, edição)

app.use(express.json())
app.use(routes)

app.listen(3333)
