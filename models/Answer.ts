import mongoose, { Schema, model, models } from 'mongoose';

const AnswerSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: "Question"
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "creator id is required!"],
    }
});

const Answer = models.Answer || model("Answer", AnswerSchema);

export default Answer;
