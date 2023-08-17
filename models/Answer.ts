import mongoose, { Schema, model, models } from 'mongoose';

const AnswerSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: "Question"
    }
});

const Answer = models.Answer || model("Answer", AnswerSchema);

export default Answer;
