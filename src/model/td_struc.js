const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    }
})

const todoSchema=new mongoose.model("todoSchema",schema)

module.exports=todoSchema;

