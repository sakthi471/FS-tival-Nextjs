import postModel from "@/models/Post";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const url = new URL(req.url);

    const username = url.searchParams.get("username");
    const id = url.searchParams.get("id");

    try {
        await connect();
        if (id) {
            const posts = await postModel.findById(id);
            
            return NextResponse.json(posts);
        } else {
            const posts = await postModel.find(username ? { username } : {});
            
            return NextResponse.json(posts);
        }
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
};

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    console.log(body);

    const newPost = new postModel(body);

    try {
        await connect();
        await newPost.save();
        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
};
