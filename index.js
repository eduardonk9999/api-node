const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


let db = [
  { '1': {name: 'Cliente 1', Idade: '20'} },
  { '2': {name: 'Cliente 2', Idade: '20'} },
  { '3': {name: 'Cliente 3', Idade: '20'} }
]

app.get('/', (req, res) => {
  return res.json(db)
})

app.post('/add', (req, res) => {
  const body = req.body

  if(!body) 
})

app.listen(21262, () => {
  console.log('Foi Familia!')
})