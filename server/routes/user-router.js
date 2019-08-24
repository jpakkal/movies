const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/', UserCtrl.createUser)
router.put('/:id', UserCtrl.updateUser)
router.delete('/:id', UserCtrl.deleteUser)
router.get('/:id', UserCtrl.getUserById)
router.get('/', MovieCtrl.getUsers)

module.exports = router