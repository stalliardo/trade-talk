import { connectToDB } from "@utils/database";
import Question from "@models/question";
import Answer from "@models/Answer"; // Import your Answer model

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    if (req.method === "POST") {
        try {
            await connectToDB();
            // const { id } = req.query;
            const { text, questionId, userId } = await req.json();
            
            // Create a new Answer document
            const newAnswer = new Answer({ text, question: questionId, creator: userId });
            await newAnswer.save();

            // Update the answers field in the corresponding question
            await Question.findByIdAndUpdate(
                questionId,
                { $push: { answers: newAnswer._id } } // Add the answer's ID to the answers array
            );

            await newAnswer.populate("creator");

            return NextResponse.json({message: "Answer successfully created!", answer: newAnswer}, { status: 201});

        } catch (error) {
            return NextResponse.json({error: "Error posting answer"}, { status: 500});
            
        }
    } else {
        return NextResponse.json({error: "Method not allowed"}, { status: 405});
    }
}
