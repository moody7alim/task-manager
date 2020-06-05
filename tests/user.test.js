const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@gmail.com',
    password: 'mike123!!!'
}

beforeEach(async ()=>{
   console.log('beforeEach')
   await User.deleteMany()
   await User.deleteOne(userOne)
   await new User(userOne).save()

})

// test('Should signup a new user' , async()=>{
//     await  request(app).post('/users').send({
//         name: 'Mohamed',
//         email: 'ahmad@exmple.com',
//         password: 'm@@dy7alim'
//     }).expect(201)
// })

test('Should login existing user', async ()=>{
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})
