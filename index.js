import express from "express";
import path from 'path'

const __dirname = path.resolve(path.dirname(''))

const app = express()

app.set("view engine", "ejs") // reconhecendo o ejs
app.use(express.static(path.join(__dirname, 'public'))) //reconhecendo a pasta public

const port = 3004

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/detalhes', (req, res) => {
    res.render('detalhes.ejs')
})