import Question from "@models/question";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    if (!params.id) return NextResponse.json({ error: "No id was provided" }, { status: 500 })

    if (req.method === "GET") {


        try {
            await connectToDB();

            // get the data for the question via the id

            const question = await Question.findById(params.id);

            return NextResponse.json(question, { status: 200});
        } catch (error) {
            return NextResponse.json({error: "Error getting the question."}, { status: 500});
        }

    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }
}