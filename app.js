import express from 'express';
const PORT = 5005

import './db/index.js'

const app = express()

app.get('/', (req, res) => {
    res.send('todosAPI')
})

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT} port`)
})