import Answer from "@models/Answer";
import Question from "@models/question";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest, {params}: {params: {userId: string}}){
    if(req.method === "GET") {
        const {userId} = params;

        if(!userId) return NextResponse.json({error: "No user id provided."}, {status: 400});

        try {
            await connectToDB();


            console.log("user id from the route = ", params.userId);

            // 1 - get the users questions by id
            const questions = await Question.find({creator: userId});

            // 2 - get the users answers by id

            const answers = await Answer.find({creator: userId});

            return NextResponse.json({questions, answers}, {status: 200});
        } catch (error) {
            
        }
    } else {
        return NextResponse.json({error: "Method not allow"}, { status: 405})
    }
}