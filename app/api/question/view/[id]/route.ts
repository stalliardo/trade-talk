import Question from "@models/question";
import { connectToDB } from "@utils/database";
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

                return NextResponse.json({ message: "Views successfully updated!", question: updatedQuestion }, { status: 200 })

            } catch (error) {
                return NextResponse.json({ error: 'Error updating the view count.' }, { status: 500 })
            }
        } else {
            return NextResponse.json({ error: "No id was provided" }, { status: 500 });
        }
    }
}
