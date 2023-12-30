const bd = require('./bd')
const express = require('express')
const app = express()

app.use(express.json())

let fucao = bd.AlunosDatabase()



app.get('/users',async (req, res)=>{
    console.log('Está no GET')
    res.status(200).send(await fucao.list())
    return
})

app.get('/users/:id',async (req, res)=>{
    let alunoId = req.params.id
    console.log('Está no GET')
    res.status(200).send( await fucao.get(alunoId))
    return
})

app.post('/users', async (req, res)=>{
    console.log('Está no POST')
    res.status(200).send( await fucao.insert(req.body))
    return
})

app.put('/users/:id', async (req, res)=>{

    console.log('Está no PUT')
    res.status(200).send(await fucao.update(req.body, req.params.id))
    return
})

app.delete('/users/:id', async (req, res)=>{
   
    console.log('Está no DELETE')
    await fucao.del(req.params.id)
    res.status(200).send("Texto excluído com sucesso!")
    return
})
app.listen(2000, ()=>{
    console.log('Servidor iniciado')
})