const {Router} = require ('express')

const {ViewUsers, usuarioPos, usuarioput, usuariodelete, mostrarusuarioget, 
    edadactualizada, veredadactualizadaget, apellidoagregadopos, apellidoactualizado,
    loginpos}= require('../controllers/user.controller')

const routerUser = Router()

routerUser.get('',ViewUsers)
routerUser.post('',loginpos)
routerUser.post('', usuarioPos)
routerUser.post('', usuarioPos)
routerUser.patch('/:apellido', apellidoactualizado)
routerUser.put('/apellido', apellidoagregadopos)
routerUser.get('/:id', mostrarusuarioget)
routerUser.put('/:edad', edadactualizada)
routerUser.get('/:edad', veredadactualizadaget)
routerUser.delete('/:id', usuariodelete)



module.exports = routerUser