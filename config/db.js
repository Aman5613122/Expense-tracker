const mongoose = require("mongoose");

const connectdb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
        });
        console.log("db connected");
    }
    catch(err){
        console.log(`error: ${err.message}`);
    }
}

module.exports = connectdb;