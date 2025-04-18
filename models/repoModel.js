const { Shield } = require("aws-sdk");
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const RepositorySchema=new Schema({
    name:{
        type:String,
        required:true,
      

    },
    description:{
        type:String,


    },
    content:[
        {
            type:String,


        } 
    ]
    ,
    visibility:{
        type:Boolean,
        default:true,
        
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,


    }
    ,issues:[
        {
            type:Schema.Types.ObjectId,
            ref:"Issue",

        }
    ]
});
const Repository=mongoose.model("Repository",RepositorySchema);
module.exports=Repository;
