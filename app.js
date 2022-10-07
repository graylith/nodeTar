const express = require('express')

const app = express()

let PORT = process.env.PORT;
if(PORT == null || PORT == ""){
    PORT = 8000
}

app.use(express.static('static'))
app.set('view engine', 'ejs')


app.get("/music", (req, res)=>{
    res.render('music')
})

app.get("/contact", (req, res)=>{
    res.render('contact')
})


app.get("/entertainment", (req, res)=>{
    res.render('entertainment')
})

app.get("/works", (req, res)=>{
    res.render('works')
})

app.get("/", (req, res)=>{
    res.render('index')
})

app.listen(PORT)