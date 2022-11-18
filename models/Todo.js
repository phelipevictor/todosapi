const { Schema, model } = require('mongoose')

const todoSchema = new Schema (
  {
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    completed: {
        type: Boolean,
        default: false
    }
   },
   { Timestamps: true}
   )

   module.exports = model('Todo', todoSchema)