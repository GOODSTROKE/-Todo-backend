// External Modules:
const router = require('express').Router()

const {
  create,
  getAll,
  deleteOneById,
  deleteAll,
  updateOneById,
  updateAll,
  toggleColorLabel,
} = require('../controllers/todos')

router.post('/', create)
router.get('/', getAll)

router.delete('/:id', deleteOneById)
router.delete('/', deleteAll)

router.put('/:id', updateOneById)
router.put('/', updateAll)
router.put('/color/:id', toggleColorLabel)

// Exports
module.exports = router
