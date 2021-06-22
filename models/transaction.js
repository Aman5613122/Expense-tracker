const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'please add some text']
    },
    amount:{
        type:Number,
        required:[true,'please add a positeve number']
    },
    createAt:{
        type:Date,
        default:Date.now
    },
});

const Transaction =  mongoose.model('Transaction',TransactionSchema);

module.exports = Transaction;