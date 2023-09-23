import mongoose from "mongoose";


const  connect = async ()=>{
     try{
         await mongoose.connect("mongodb+srv://sakthi:sakthi@cluster0.s9oiohd.mongodb.net/marvel?retryWrites=true&w=majority")
     }

     catch(err){
         throw new Error("connection failed")
     }
}

export default connect
