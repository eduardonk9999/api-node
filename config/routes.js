const express = require('express')
const routes = express.Router()

module.exports = routes


let db = [
  { '1': {name: 'Cliente 1', Idade: '20'} },
  { '2': {name: 'Cliente 2', Idade: '20'} },
  { '3': {name: 'Cliente 3', Idade: '20'} }
]

routes.get('/', (req, res) => {
  return res.json(db)
})


routes.post('/add', (req, res) => {
  const body = req.body

  if(!body)
    return res.status(400).end()

  db.push(body)
  return res.json(body)
})
