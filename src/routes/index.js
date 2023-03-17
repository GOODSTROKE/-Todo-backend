const router = require('express').Router()
const Todos = require('../models/Todos')
const todosRoutes = require('./todos')

//Health Checker
router.use('/health', (_req, res) => res.status(200).json({ status: 'ok' }))

// Application Routes
router.use('/api/v1/todos', todosRoutes)

// Root Files:
router.use('/', async (req, res) => res.render('index'))

// Module Exports
module.exports = router
