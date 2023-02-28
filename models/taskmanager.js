// name - type: string, validation: required
// description - type: string
// completed - type: boolean, validation: required
// dateCreated - type: date, default: Date.now(), validation: required
// dateCompleted - type: date
// status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']


const mongoose = require("mongoose");
const {v4: uuidv4} = require("uuid");
const toDoSchema = new mongoose.Schema({

    name: {type:String, required:true},
    description: {type: String}, 
    completed: {type:Boolean, default:false,required:true},
    dateCreated: {type: Date, default: Date.now,required:true}, 
    dateCompleted: {type: Date},
    status: {type: String, default: 'incomplete', enum: ['incomplete', 'complete', 'deferred'], required:true}
})