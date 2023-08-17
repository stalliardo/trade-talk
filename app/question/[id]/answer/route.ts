// import { connectToDB } from "../../../utils/db";
// import Question from "../../../models/question";
// import Answer from "../../../models/answer"; // Import your Answer model

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//         try {
//             await connectToDB();
//             const { id } = req.query;
//             const { text } = req.body;

//             // Create a new Answer document
//             const newAnswer = new Answer({ text, question: id });
//             await newAnswer.save();

//             // Update the answers field in the corresponding question
//             await Question.findByIdAndUpdate(
//                 id,
//                 { $push: { answers: newAnswer._id } } // Add the answer's ID to the answers array
//             );

//             return res.status(201).json({ message: "Answer posted" });
//         } catch (error) {
//             return res.status(500).json({ message: "Error posting answer" });
//         }
//     } else {
//         return res.status(405).json({ message: "Method not allowed" });
//     }
// }
