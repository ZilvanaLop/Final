const {response, request} =require('express')

const ViewUsers = (req= request, res= response) => {
res.json({'msg':'exito'})

}

const loginpos = (req, res= response) =>{

    const {usuario, contrasena} = req.body

    res.status(201).json({
        msg: 'post API - loginpos',
        usuario, 
        contrasena

    })
}



const usuarioPos = (req, res= response) =>{

    const {nombre, edad} = req.body

    res.status(201).json({
        msg: 'post API - usuarioPos',
        nombre, 
        edad

    })
}



const apellidoagregadopos = (req, res= response) =>{

    const {apellido} = req.body

    res.status(201).json({
        msg: 'post API - apellidoagregadopos',
        apellido

    })
}



const usuarioput = (req, res= response) =>{

    const {id} = req.params

    res.status(201).json({
        msg: 'put API - usuarioput',
        id

    })
}



const mostrarusuarioget = (req, res= response) =>{

    const {id} = req.params

    res.status(201).json({
        msg: 'get API - mostrarusuarioget',
        id

    })
}


const edadactualizada = (req, res= response) =>{

    const {edad} = req.params

    res.status(201).json({
        msg: 'put API - edadactualizada',
        edad

    })
}



const veredadactualizadaget = (req, res= response) =>{

    const {edad} = req.params

    res.status(201).json({
        msg: 'get API - veredadactualizadaget',
        edad

    })
}



const apellidoactualizado = (req, res= response) =>{

    const {apellido} = req.params

    res.status(201).json({
        msg: 'patch API - apellidoactualizado',
        apellido

    })
}




const usuariodelete = (req, res= response) =>{

    const {id} = req.params

    res.status(410).json({
        msg: 'delte API - usuariodelete',
        id

    })
}

module.exports= {ViewUsers, usuarioPos, usuarioput, usuariodelete, loginpos, 
    mostrarusuarioget, edadactualizada, veredadactualizadaget, apellidoagregadopos, apellidoactualizado}