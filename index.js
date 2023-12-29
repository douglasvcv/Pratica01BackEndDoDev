const express = require('express')
const app = express()

app.use(express.json())


let alunos = []

app.get('/users', (req, res)=>{
    console.log('Está no GET')
    res.status(200).send({alunos:alunos})
    return
})

app.get('/users/:id', (req, res)=>{
    let alunoId = req.params.id
    console.log('Está no GET')
    res.status(200).send(alunos.find(x => x.id == alunoId))
    return
})

app.post('/users', (req, res)=>{
    console.log('Está no POST')
    alunos.push(req.body)
    res.status(200).send(req.body)
    return
})

app.put('/users/:id', (req, res)=>{
    let alunoId = req.params.id
    alunos.splice(alunoId - 1, 1, req.body)
    console.log('Está no PUT')
    res.status(200).send(alunos.find(x => x.id == alunoId))
    return
})

app.delete('/users/:id', (req, res)=>{
    let alunoId = req.params.id
    console.log('Está no DELETE')
    alunos.splice(alunoId -1, 1)
    res.status(200).send(alunos.find(x=>x.id == alunoId))
    return
})
app.listen(2000, ()=>{
    console.log('Servidor iniciado')
})