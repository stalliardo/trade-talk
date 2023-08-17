import Question from '@models/question';
import { connectToDB } from '@utils/database';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

    if (req.method === "GET") {
        const { searchParams } = new URL(req.url);
        const searchQuery = searchParams.get("q");

        try {
            await connectToDB();

            const mongoQuery = {
                $or: [
                    { title: { $regex: searchQuery, $options: "i" } },
                    { category: { $regex: searchQuery, $options: "i" } }
                ]
            };

            const questions = await Question.find(mongoQuery);

            return NextResponse.json({questions}, {status: 200});
        } catch (error) {
            return NextResponse.json({error: "Error searching for questions"}, {status: 500});
        }
    }
}