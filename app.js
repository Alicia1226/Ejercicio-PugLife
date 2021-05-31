const express = require('express')
const app = express()
const router= require('./controllers/index')
const port = 3001

app.use('/',router);

app.set('view engine', 'pug');
app.set('views','./views');










      
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })