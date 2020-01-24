const express= require('express')
const requireDir = require('require-dir')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb+srv://eckart14:Marcos2103@cluster0-vwikr.mongodb.net/nodeApi?retryWrites=true&w=majority",{ useNewUrlParser: true });

const app = express()
app.use(express.json())
app.use(cors())

requireDir('./src/models/')

app.use('/api', require('./src/routes'))

app.listen(3001)