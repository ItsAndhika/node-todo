import express from 'express'
import db from './models/db.js'
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    const todos = db.query(`SELECT * FROM todo`, (err, result) => {
        if(err) throw err
        return result
    })
    res.render('index', {
        title: "Todo List",
        todos
    })
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})