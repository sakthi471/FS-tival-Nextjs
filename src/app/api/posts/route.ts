
import postModel from "@/models/Post";
import connect from "@/utils/db"
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req:NextApiRequest,res: NextApiResponse) => {

    const url =new URL(req.url)

    const username=url.searchParams.get("username");
    const id =url.searchParams.get("id")

    try {
        await connect()
        if(id){
            const posts = await postModel.findById(id)
            console.log(posts);     
            return NextResponse.json(posts) 
        }
        else{
            const posts = await postModel.find( username && {username})
            console.log(posts);     
            return NextResponse.json(posts) 
        }
      
    }
    catch (err) {
         console.log( err);
         
    }
} 

export const POST = async (request:Request) => {
   
    const body=await  request.json()
    console.log(body);
    
     
    const newPost= new postModel(body)

    try {
        await connect()
        newPost.save()
        return new NextResponse("post had been creaet",{status:201}) 
    }
    catch (err) {
         console.log( err);
         
    }
} 