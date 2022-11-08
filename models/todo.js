import { Schema, model } from 'mongoose'

const todoSchema = new Schema (
  {
    title: {
        type: string,
        required: [true, 'Title is required'],
    },
    completed: {
        type: bollean,
        default: false,
    },
   },
   { Timestamps: true}
   )

   const Todo = model('Todo', todoSchema)

   export default Todo