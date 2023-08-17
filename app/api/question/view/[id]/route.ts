import Question from "@models/question";
import { AnswerData } from "@types";
import { connectToDB } from "@utils/database";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    if (req.method === "GET") {

        const { id } = params;

        if (id) {
            try {
                await connectToDB();

                const updatedQuestion = await Question.findByIdAndUpdate(
                    id,
                    { $inc: { views: 1 } },
                    { new: true }
                )

                if(updatedQuestion.answers.length > 0) {
            
                    // populate the answers and the associated user with each answer
                    await updatedQuestion.populate({path: "answers", populate: {path: "creator"}})   
                }
                return NextResponse.json({ message: "Views successfully updated!", question: updatedQuestion }, { status: 200 })

            } catch (error) {
                console.log("error = ", error);
                return NextResponse.json({ error: 'Error updating the view count.' }, { status: 500 })
            }
        } else {
            return NextResponse.json({ error: "No id was provided" }, { status: 500 });
        }
    }
}
