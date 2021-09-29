//Cart Model:


const mongoose=require('mongoose');

const cartSchema=new mongoose.model({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    product:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    
})

const Cart=mongoose.model("cart",cartSchema);