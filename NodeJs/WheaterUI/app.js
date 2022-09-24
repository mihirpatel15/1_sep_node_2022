const geocode = require('./Util/geocode')
const hbs = require('hbs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine', 'hbs')  //template Engien 

app.set('views', path.join(__dirname, 'Template/Views')) //set path of directorey
//app.set('views', path.join(__dirname, 'Template/Partials')) //set path of directorey

partialPath = path.join(__dirname, 'Template/Partials') //set path of directorey
hbs.registerPartials(partialPath)

publicPath = path.join(__dirname, 'Public')
app.use(express.static(publicPath))

app.get('/', function (req, res) {
    // res.send('<h1>Home</h1>')
    res.render('Home')
})
app.get('/About', function (req, res) {
    res.send('<h1>About</h1>')
})
app.get('/wheather', function (req, res) {
    const city = req.query.location
    geocode(city, (result) => {
        console.log(result)
        res.json(result)
    })
   
})

app.listen(PORT, function () {
    console.log('server running on', PORT)
})