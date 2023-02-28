// name - type: string, validation: required
// description - type: string
// completed - type: boolean, validation: required
// dateCreated - type: date, default: Date.now(), validation: required
// dateCompleted - type: date
// status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']


const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");
const toDoSchema = new mongoose.Schema({

    
})