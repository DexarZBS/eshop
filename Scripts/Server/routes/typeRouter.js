const Router = require('express')
const router = new Router()
const typeConstroller = require('../controllers/typeController')


router.post('/', typeConstroller.create)
router.get ('/',typeConstroller.getAll)

module.exports = router
