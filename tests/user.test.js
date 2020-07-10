const request = require('supertest')
const app = require('../src/app')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose")
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id : userOneId,
    name: 'Mike',
    email: 'mike@gmail.com',
    password: 'mike123!!!',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

beforeEach(async ()=>{

   
   await User.deleteMany()
   await new User(userOne).save()
})

// test('Should signup a new user' , async()=>{
//     await  request(app).post('/users')
//     .send({
//         name: userOne.name,
//         email: userOne.email,
//         password: userOne.password
//     })
//     .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
//     .expect(201)
// })
 
test('Should login existing user', async ()=>{
    await request(app).post('/users/login')
    .send({
        email: userOne.email,
        password: userOne.password
    })
    .expect(200)
})

test('Should get profile for authenticated user', async()=>{
    await request(app)
        .get('/users/me')
        .send()
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(200)
})
