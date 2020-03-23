const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error)
        return console.log(error)

    const db = client.db(databaseName)
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'study',
    //         completed: true
    //     },
    //     {
    //         description: "change the tires",
    //         completed: false
    //     },
    //     {
    //         description: 'visit the clinic',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error)
    //         return console.log('unable to insert data to tasls')
    //     console.log(result.ops)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
})

