const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const chefData = require('./data/data.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
    
})
app.get('/chefs', (req, res) => {
    res.send(chefData)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })