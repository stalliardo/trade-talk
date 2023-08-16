import Question from "@models/question";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest){
    const { userId, title, category, question } = await req.json();    

    try {
       if(req.method === "POST"){
        await connectToDB();

        const newQuestion = new Question({
            creator: userId,
            title,
            category,
            question
        })
        await newQuestion.save();

        return NextResponse.json({message: "Question successfully saved!"}, { status: 201})
       }

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
