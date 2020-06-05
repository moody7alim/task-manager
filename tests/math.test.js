const  { tip, FtoC, CtoF,add }  = require('../src/math')

// test('Should calculate total with tip',()=>{
//     const total = tip(100,0.2)

//     expect(total).toBe(120)
   
// })

// test('Async test demo', (done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         done()
//     },2000)
// })

// test('should add two numbers',(done)=>{
//     add(2,3).then((sum)=>{
//         expect(sum).toBe(5)
//         done()
//     })
// })

test('Should add two numbers asysn/await', async()=>{
    const sum = await add(10,22)
    expect(sum).toBe(32)
})




