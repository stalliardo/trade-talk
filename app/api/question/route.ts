import Question from "@models/question";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    if (req.method === "GET") {
        try {
            await connectToDB();

            // Fetch the last 10 questions sorted by creation date in descending order
            const questions = await Question.find().sort({createdOn: -1}).limit(10);

            console.log("questions = ", questions);

            return NextResponse.json({questions}, {status: 200});
        } catch (error) {
            return NextResponse.json({error: "Error getting questions"}, {status: 500});
        }
    }
}