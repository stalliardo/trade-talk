import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (req: Request) => {
    try {
        await connectToDB();
        const userExists = await User.findOne({email: "test2@gmail.com"});
        if(!userExists){
            await User.create({
                email: "test2@gmail.com",
                username: "ssssdewss",
            })
        } else return new Response(JSON.stringify({error: "Duplicate email"}), { status: 409 })

        return new Response("User created", { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({error: "Failed to create user"}), { status: 500 });
    }
}