const { Router } = require('express');
const { trusted } = require('mongoose');
const Todo = require('../models/Todo.js')

const router = Router()

router.get('/todos', async (req, res) => {
    try {
        const allTodo = await Todo.find()
        res.status(200).json(allTodos)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post('/todos', async (req, res) => {
    const {title, completed} = req.body
    try {
        const newTodo = await Todo.create({...req.body})
        res.status(200).json(newTodo)
    } catch (erorr) {
        res.status(400).json({msg:`Couldn't create a new Todo`, error})
    }
})

router.put('/:id', async (req, res) => { 
    const { id } = req.params;
    try {
        const updatedTodo = await Todo.findOneAndUpdate(id, req.body, {
            new: true
        }); 
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).json({msg: `Can't update Todo`, error})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findOneAndDelete(id)
        res.status(200).json('Todo was deleted')
    } catch (error) {
        res.status(500).json({msg: `Can't delete Todo`, error})
    }
})

module.exports = router