
const express = require('express');
const router = express.Router();
const TaskManager = require('../models/TaskManager');


/* GET home page. */
router.get('/', async function(req, res, next) {


  try {
    const TaskManager = await TaskManager.find({});
    res.json({TaskManager: TaskManager });
  }catch(e){
    console.log(e);
  }
});





module.exports = router;