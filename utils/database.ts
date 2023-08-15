import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected){
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: "trade_talk",
        })

        console.log("\nConnected to DB!\n");

        isConnected = true;
    } catch (error) {
        console.log("Error connecting to DB! Error: ", error);
    }
}