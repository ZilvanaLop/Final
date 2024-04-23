const {Router} = require ('express')

const {ViewUsers, datospos, cantidadprod, cantidadnuevaget, cantidaddelete, }= require('../controllers/producto.controller')

const routerUser = Router()

routerUser.get('',ViewUsers)
routerUser.put('/', datospos)
routerUser.put('/:cantidad', cantidadprod)
routerUser.get('/:cantidad', cantidadnuevaget)
routerUser.delete('/:cantidad', cantidaddelete)




module.exports = routerUser