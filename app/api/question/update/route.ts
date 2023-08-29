import Question from "@models/question";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    if (req.method === "PUT") { // Use PUT method for updating

        const { userId, title, category, question, questionId } = await req.json();    

        try {
            await connectToDB();

            // Find the question by its ID
            const existingQuestion = await Question.findById(questionId);

            if (!existingQuestion) {
                return NextResponse.json({ error: 'Question not found' }, { status: 404 });
            }

            // Check if the user is authorized to update the question
            if (existingQuestion.creator.toString() !== userId) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
            }

            // Update the question fields
            existingQuestion.title = title;
            existingQuestion.category = category;
            existingQuestion.question = question;

            // Save the updated question
            await existingQuestion.save();

            return NextResponse.json({ message: "Question successfully updated!" }, { status: 200 });

        } catch (error) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
}
