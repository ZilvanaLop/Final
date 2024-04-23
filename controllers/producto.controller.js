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


const datospos = (req, res= response) =>{

    const {nombre, codigo} = req.body

    res.status(201).json({
        msg: 'post API - datospos',
        nombre, 
        codigo

    })
}



const cantidadprod = (req, res= response) =>{

    const {cantidad} = req.params

    res.status(201).json({
        msg: 'put API - cantidadprod',
        cantidad

    })
}



const cantidadnuevaget = (req, res= response) =>{

    const {cantidad} = req.params

    res.status(201).json({
        msg: 'get API - cantidadnuevaget',
        cantidad

    })
}


const cantidaddelete = (req, res= response) =>{

    const {cantidad} = req.params

    res.status(201).json({
        msg: 'get API - cantidaddelete',
        cantidad

    })
}


module.exports= {ViewUsers, loginpos, datospos, cantidadprod, cantidadnuevaget, cantidaddelete}