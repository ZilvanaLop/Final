const request = require ('supertest')
const Server =require ('../models/server')
const server = new Server()

const token ="12345"
const datosprueba ={nombre:"acetaminofen", cantidad:"25"}
const nombre= "Acetaminofen"
const cantidad ="50"
const userid = 1
const datoape ={apellido:"lópez"}
const datoslogin ={usuario:"Silvi", contrasena:"1003"}



describe("post/api/productos",() =>{
    
    test ("crear medicamento de farmacia", async ()=> {

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre

        })

    })

})



describe("post/api/productos",() =>{
    
    test ("Medicamento creado con exito", async ()=> {

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre

        })

    })

})

describe("put/api/productos:nombre",() =>{
    
    test ("Actualizar nombre de medicamento", async ()=> {

        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body=nombre
            console.log(body)
            
        })

    })


describe("put/api/productos:nombre",() =>{
    
    test ("Actualización exitosa", async ()=> {

        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        })

    })
})

describe("put/api/productos:cantidad",() =>{
    
    test ("Actualizar cantidad", async ()=> {

        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body=cantidad
            console.log(body)
            
        })

    })
})


describe("get/api/productos:cantidad",() =>{
    
    test ("Ver cantidad actualizada", async ()=> {

        return request(server.app)
        .get('/api/users/1')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{ 
            body= datosprueba.cantidad
            console.log(body)
            
        })

    })
})



describe("delete/api/productos:nombre",() =>{
    
    test ("Eliminación de medicamento", async ()=> {

        return request(server.app)
        .delete('/api/users/${userid}')
        .set('Authorization','Bearer'+token)
        .expect(410)
        .then(({body})=>{
              
            console.log("Eliminación existosa")
    })

})
})