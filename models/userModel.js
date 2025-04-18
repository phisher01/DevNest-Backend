const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:{type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,

    },
    repositories:[
        {
            type:Schema.Types.ObjectId,
            ref:"Repository",
            default:[],

        }
    ],
    followedUsers:[
        {
            type:Schema.Types.ObjectId,
            ref:"Users",
            default:[],

        }
    ],
    starRepos:[
        {
            type:Schema.Types.ObjectId,
            ref:"Repository",
            default:[],

        }
    ],
})

const User=mongoose.model("User",UserSchema);
module.exports=User;