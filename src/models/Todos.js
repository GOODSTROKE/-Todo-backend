// External MOdules:
const mongoose = require('mongoose')

// Schema Defination:
const TodosSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dateCompleted: {
      type: Date,
    },
    label: {
      type: String,
    },
    status: {
      type: String,
      enum: ['incomplete', 'complete', 'deferred'],
      default: 'incomplete',
    },
  },
  { timestamps: true, versionKey: false }
)

// Todos Model:
const Todos = mongoose.model('Todos', TodosSchema)

// Export Module
module.exports = Todos
