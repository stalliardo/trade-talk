import User from "@models/user"; 
import Question from "@models/question"; 
import Answer from "@models/Answer";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { query }: { query: { id: string } }) {
    if (req.method === "DELETE") {
        const { id } = query;

        try {
            await connectToDB();

            await Question.deleteMany({ creator: id });

            await Answer.deleteMany({ creator: id });

            const deletedUser = await User.findByIdAndRemove(id);

            if (deletedUser) {
                return NextResponse.json({ message: "User account deleted successfully" }, { status: 200 });
            } else {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }
        } catch (error) {
            // Handle any server-side error
            console.error("Error deleting user account:", error);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
    }
}
