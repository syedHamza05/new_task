const mongoose = require('mongoose')

const dbConnection = async()=>{
    try{
        console.log('MongoDB Connected', process.env.DB_CONNECT)
        mongoose.connect("mongodb://localhost:27017/aestro",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((conn)=>{
            console.log(`mongoDB Connected : ${conn.connection.host}`)
            
        })
    }catch (error){
        console.log('error while connectingdb' + error)
    }
}


module.exports={dbConnection}

