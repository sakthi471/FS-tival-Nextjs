import mongoose from "mongoose";

const {Schema} =mongoose

const   userSchema=new Schema ({
     username:{
         type:String,
         unique:true,
         required:true,
     },
     email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},  {timestamps:true })


const userModel= mongoose.models.User || mongoose.model('User', userSchema);

export default userModel;