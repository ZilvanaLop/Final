const request = require ('supertest')
const Server =require ('../models/server')
const server = new Server()


const token ="12345"
const datosprueba ={nombre:"Silvi", edad:"26"}
edad= "26"
const userid = 1
const datoape ="lópez"
const datoslogin ={usuario:"Silvi", contrasena:"1003"}
const usuario2 = "Silvi2"
const usuario = "Silvi"



describe ('GET /api/users',()=>{
    test ('respuesta codigo 200', async () =>{

        const response= await request (server.app).get('/api/users').send ()
        expect (response.statusCode).toBe(200)
    })
})


describe("post/api/users",() =>{
    
    test ("crear login", async ()=> {

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send('datoslogino')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            datoslogin.usuario=body.usuario

        })

    })

})


describe("post/api/users",() =>{
    
    test ("crear usuario", async ()=> {

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body = usuario
            console.log(usuario)

        })

    })

    test ("se puede crear usuario", async ()=> {

        return request(server.app)
        .post('/api/users')
        .send('datosprueba')
        .expect(201)
    })



})


describe("post/api/users",() =>{
    
    test ("Apellido creado con exito", async ()=> {

        return request(server.app)
        .post('/api/users')
        .set('Authorization','Bearer'+token)
        .send('datoape')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body=datoape
            console.log(body)

        })

    })

})

describe("put/api/users:id",() =>{
    
    test ("Actualización de usuario", async ()=> {

        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body= userid
            console.log(body)
            
        })

    })


describe("put/api/users:id",() =>{
    
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

describe("put/api/users:id",() =>{
    
    test ("Edad actualizada", async ()=> {

        return request(server.app)
        .put('/api/users/1')
        .set('Authorization','Bearer'+token)
        .send('datosprueba')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body=edad
            console.log(body)
            
        })

    })
})


describe("get/api/users:id",() =>{
    
    test ("Ver usuario actualizado", async ()=> {

        return request(server.app)
        .get('/api/users/1')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body=usuario2
            console.log(body)
            
        })

    })
})


describe("get/api/users:id",() =>{
    
    test ("Ver edad actualizada", async ()=> {

        return request(server.app)
        .get('/api/users/1')
        .expect('Content-type',/json/)
        .expect(201)
        .then(({body})=>{
            body=edad
            console.log(body)
            
        })

    })
})


describe("delete/api/users:id",() =>{
    
    test ("Eliminación de usuario", async ()=> {

        return request(server.app)
        .delete('/api/users/${userid}')
        .set('Authorization','Bearer'+token)
        .expect(410)
        .then(({body})=>{
              
        console.log("Eliminación existosa")
    })

})
})