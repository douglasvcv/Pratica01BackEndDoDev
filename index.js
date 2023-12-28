const express = require('express')
const app = express()

app.use(express.json())


app.get('/users', (req, res)=>{
    console.log('Está no GET')
    res.status(200).send("todos os usuários")
    return
})

app.get('/users/:id', (req, res)=>{
    console.log('Está no GET')
    res.status(200).send(req.params.id)
    return
})

app.post('/users', (req, res)=>{
    console.log('Está no POST')
    res.status(200).send(req.body)
    return
})

app.put('/users/:id', (req, res)=>{
    console.log('Está no PUT')
    res.status(200).send(req.params.id)
    return
})

app.delete('/users/:id', (req, res)=>{
    console.log('Está no DELETE')
    res.status(200).send(req.params.id)
    return
})
app.listen(2000, ()=>{
    console.log('Servidor iniciado')
})