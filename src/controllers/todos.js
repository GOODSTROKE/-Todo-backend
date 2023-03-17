// External Module:
const createError = require('http-errors')
const Todos = require('../models/Todos')

/**
 * @desc Create
 * @Route [POST]- /api/v1/todos
 * @Access protected - [admin]
 * @returns {OBJECT}
 */
const create = async (req, res, next) => {
  try {
    let newData = new Todos({ ...req.body })
    await newData.save()

    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments({})
    const data = await Todos.find({}, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    return res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Get All Data
 * @Route [GET]- /api/v1/todos
 * @Access protected - [admin]
 * @returns {Array<JSON>}
 */
const getAll = async (req, res, next) => {
  try {
    const query = {}
    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments(query)
    const data = await Todos.find(query, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    if (totalCount) {
      return res.status(200).json(data)
    }
    return next(createError(404, 'No Todos found!'))
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/todos/:id?status=boolean
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const updateOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let body = { completed: Boolean(Number(req.query.status)) }

    await Todos.findOneAndUpdate(query, body)

    // Fetch Todos Again
    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments({})
    const data = await Todos.find({}, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    return res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/todos
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const updateAll = async (req, res, next) => {
  try {
    let query = {}
    let body = { completed: true }
    await Todos.updateMany(query, body)

    // Fetch Todos Again
    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments({})
    const data = await Todos.find({}, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    return res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Delete single
 * @Route [DELETE]- /api/v1/todos/:id
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteOneById = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    await Todos.findByIdAndDelete(query)

    // Fetch Todos Again
    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments({})
    const data = await Todos.find({}, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    return res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Delete All
 * @Route [DELETE]- /api/v1/todos
 * @Access protected - [admin]
 * @returns {Boolean}
 */
const deleteAll = async (req, res, next) => {
  try {
    let query = {}
    await Todos.deleteMany(query)

    // Fetch Todos Again
    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments({})
    const data = await Todos.find({}, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    return res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

/**
 * @desc Update Data
 * @Route [PUT]- /api/v1/todos/color/:id
 * @Access protected - [admin]
 * @returns {JSON} - Updated Object
 */
const toggleColorLabel = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let body = { ...req.body }

    await Todos.findOneAndUpdate(query, body)

    // Fetch Todos Again
    const projection =
      'name description completed status createdAt dateCompleted label'
    const options = { sort: { createdAt: -1 } }
    const totalCount = await Todos.countDocuments({})
    const data = await Todos.find({}, projection, options).limit(10)
    res.set('x-total-count', totalCount)
    return res.status(200).json(data)
  } catch (error) {
    next(createError(500, error))
  }
}

//Export Module:
module.exports = {
  create,
  getAll,
  deleteOneById,
  deleteAll,
  updateOneById,
  updateAll,
  toggleColorLabel,
}
