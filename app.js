// External Modules:
const express = require('express')
const colors = require('colors')
require('dotenv').config()
const ejs = require('ejs')
const path = require('path')

// Internal Modules:
const routes = require('./src/routes')
const {
  notFoundHandler,
  errorHandler,
} = require('./src/middlewares/errorHandler')
const { mongooseConnection } = require('./src/config/db')
const globalMiddlewares = require('./src/middlewares/globalMiddlewares')

// Initialization:
const app = express()

// Set View Engine
// __dirname will get the current directory
app.set('views', path.join(__dirname + '/views'))

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs')

// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile)

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Databse Connection:
mongooseConnection()

// Global Middlwares
app.use(globalMiddlewares)

// Routes:
app.use(routes)

//Not Found & Error Handler
app.use([notFoundHandler, errorHandler])

// Server:
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`.rainbow.bold)
)
