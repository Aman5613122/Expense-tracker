const express =require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan  = require("morgan");
const path = require('path');
const connectdb = require("./config/db");


dotenv.config();

connectdb();
const transaction = require("./routes/transaction");

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transaction',transaction);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res)=> {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(5000 || process.env.PORT,()=>{console.log("servers is running on port 5000".red);})
