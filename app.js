const express = require('express')
const app = express()
const config = require('./config/index.js')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const setupController = require('./controllers/setupController.js')
const apiController = require('./controllers/apiController.js')

app.use('/assets', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

mongoose.connect(config.getDBConnectionString())
setupController(app)
apiController(app)
app.listen(port)