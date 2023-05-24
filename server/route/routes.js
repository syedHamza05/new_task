const router = require('express').Router()
const controllers = require('../controller/controllers')

router.post('/Class',  controllers.Class)
router.put('/update/:id', controllers.updateClass)
router.get('/class/list', controllers.classlist)
router.delete('/delete/:id', controllers.removeClass)

module.exports= router