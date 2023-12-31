import mongoose, { Schema, model, models } from 'mongoose';

const QuestionSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Title is required!"],
    },
    category: {
        type: String,
        required: [true, "Category is required!"],
       
    },
    question: {
        type: String,
        required: [true, "Question is required!"],
    },

    createdOn: {
        type: Date,
        default: Date.now
    },

    views: [{
        type: String // Store user agents as strings
    }],

    answers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer"
        }
    ]
})

const Question = models.Question || model("Question", QuestionSchema);

export default Question;