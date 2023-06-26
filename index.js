const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World! i am nirob i am a web developer amader desher nam bangladesh')
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })