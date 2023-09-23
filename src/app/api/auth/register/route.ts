import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

import bcrypt from 'bcryptjs'
import userModel from "@/models/User";


export const POST = async (request:Request) => {
      
    const {name,email,password}= await request.json()
    console.log(name,email,password);

    await connect();
    const hashpassword= await bcrypt.hash(password,5)

    const newUser= await new userModel (
        {
            username:name,
            email,
            password:hashpassword,
        }
    )
    try{  
         
         await newUser.save()

         return  new NextResponse(" user has been",{status:201})
    }
    catch(err){
        return  new NextResponse( "error",{status:501})
        

    }
           
} 