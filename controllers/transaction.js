const Transaction = require("../models/transaction");

exports.getTransaction = async(req,res,next)=>{
    try{
        const transaction = await Transaction.find();
        return res.status(200).json({
            source:true,
            count:transaction.length,
            data:transaction,
        });
    }
    catch (err){
        return res.status(500).json({
            success:false,
            error:"server error",
        });
    }
}


exports.addTransaction = async (req,res,next)=>{
    const {text,amount} = req.body;

    try{
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
        sucess:true,
        data:transaction
    })
    }
    catch(err){
        if(err.name == "ValidationError"){
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error:messages,
            });
        }else{
            return res.status(500).json({
                success:false,
                error:"server error",
            });
        }
    }
}

exports.deleteTransaction = async (req,res,next)=>{
    try{
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"No transaction",
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success:true,
            data:{}
        });
    }
    catch(err){
        return res.status(500).json({
            success:false,
            error:"server error",
        });
    }
}