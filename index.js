const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// require('./controllers/authController')(app)
// require('./controllers/root')(app)


app.get('/', (req, res) => {
  res.send({ok:'ok'})
})

app.listen(process.env.PORT || 8080)
