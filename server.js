const express = require('express')
const knex = require('knex');
const db_config = require('./knexfile')
const db = knex(db_config.development)
const server = express()
const port = 3000
 

server.use(express.json())

server.get('/', (req, res) => {
  db('team').select()
  .then((team) => 
  {
    res.status(200).json(team);
  })
})

server.listen(port, function () {
  console.log(`\Listening on http://localhost:${port}  \n`)})