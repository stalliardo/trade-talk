import Answer from "@models/Answer";

import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    if (req.method === "DELETE") {
        const { id } = params;

        try {
            await connectToDB();
            const deletedAnswer = await Answer.findByIdAndRemove(id);

            if (deletedAnswer) {
                return NextResponse.json({ message: "Answer deleted successfully" }, { status: 200 });
            } else {
                return NextResponse.json({ error: "Answer not found" }, { status: 404 });
            }
        } catch (error) {
            console.error("Error deleting answer:", error);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
    }
}
