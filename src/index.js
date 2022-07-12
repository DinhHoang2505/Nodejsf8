const express = require('express')
const morgan = require('morgan')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()

app.use(morgan('combined'))

app.engine('hbs', exphbs.engine({
  extname: 'hbs',
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));



app.get('/', function (req, res) {
  res.render('home')
})


app.listen(3000)