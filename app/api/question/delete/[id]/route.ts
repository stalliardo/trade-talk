import Question from "@models/question";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    if (req.method === "DELETE") {
        const { id } = params;

        try {
            await connectToDB();
            const deletedQuestion = await Question.findByIdAndRemove(id);

            if (deletedQuestion) {
                return NextResponse.json({ message: "Question deleted successfully" }, { status: 200 });
            } else {
                return NextResponse.json({ error: "Question not found" }, { status: 404 });
            }
        } catch (error) {
            console.error("Error deleting question:", error);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
    }
}
