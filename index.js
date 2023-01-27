import express from 'express'
import {getAll, addData} from './functions.js'
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
    const todos = await getAll()
    console.log(todos)
    res.render('index', {
        title: "Todo List",
        todos
    })
})

app.post('/', (req, res) => {
    addData(req.body.todo)
    res.redirect('/')
})

app.use('/', (req, res) => {
    res.send("404 PAGE NOT FOUND!")
})

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})