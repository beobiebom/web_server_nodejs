const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
//Set path to templates directory 
const viewsPath = path.join(__dirname, '../templates/views')
// Set path to partials directory
const partialsPath = path.join(__dirname, '../templates/partials')

// To use file html in public directory
// index.html in root(head) of app
app.use(express.static(publicDirectoryPath))
//To reuse code and handlebar help render dynamic content
app.set('view engine', 'hbs')
//default directory of view engine is 'views', to change it then using:
app.set('views', viewsPath)
//Register partials
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    //allow render view and can send data to hbs to reuse it
    res.render('index', {
        title: 'Weather app',
        name: 'Nguyen Minh Duc'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Nguyen Minh Duc'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Nguyen Minh Duc'
    })
})

// This isn't need because index.html in root
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     //Auto convert to json
//     res.send([
//         {
//             name: 'Minh Duc'
//         },
//         {
//             name: 'Kim Ngan'
//         }
//     ])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Abouth1>')
// })

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

//match any page 
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Nguyen Minh Duc',
        errorMessage: 'Help article not found'
    })
})

//match any page 
app.get('*', (req, res) => {
    res.render ('404', {
        title: '404',
        name: 'Nguyen Minh Duc',
        errorMessage: 'Page not found',
    })
})

app.listen(3000, () => {
    console.log('Server is on port 3000')
})