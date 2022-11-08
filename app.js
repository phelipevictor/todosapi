import express from 'express';
const PORT = 5005

import './db/index.js'

const app = express()

app.use(express.json())

app.get('/todos', (req, res) => {
    res.send('Get all Todos form DB')
})

import Todo from './models/todo.js'

app.post('/todos', async (req, res) => {
    const { body } = req
    try {
    const newTodo = await Todo.create(body)
    res.status(201).json(newTodo)
    } catch (error) {
    res.status(400).json({ status: 400, msg: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT} port`)
})