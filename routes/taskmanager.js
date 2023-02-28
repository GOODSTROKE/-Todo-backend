const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();

const taskmanagercontrolers = require('../controlers/taskmanagercontrolers');

/////////////
// Create
/////////////

router.post("/create-task", taskmanagercontrolers.createTask);
// router.post("/create-multi", taskmanagercontrolers.createMultipleTasks);

/////////////
// Read
/////////////

router.get("/all", taskmanagercontrolers.getAllTasks);
router.get("/get-one/:name", taskmanagercontrolers.getOneTask);

/////////////
// Delete
/////////////

router.delete("/delete-one/:name", taskmanagercontrolers.deleteOneTask);
// router.delete("/delete-multi/", taskmanagercontrolers.deleteMultipleTasks);

/////////////
// Update
/////////////

router.put("/update-task/:name",taskmanagercontrolers.updateOneTask);
