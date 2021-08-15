const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(21262, () => {
  console.log('Foi Familia!')
})