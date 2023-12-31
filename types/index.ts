export interface Profile {
    email: string;
    name: string;
    picture: string;
    username?: string;
    _id?: string;
}

export interface CreatorData {
    email: string;
    username: string;
}

export interface AnswerData {
    text: string;
    _id?: string;
    question?: string;
    questionId?: string;
    creator?: CreatorData | string;
    createdOn?: Date | string;
    userId?: string;
}

export interface QuestionData {
    createdOn: Date | string;
    creator: string;
    title: string;
    category: string;
    question: string;
    _id: string;
    views: string[];
    answers: AnswerData[]; // TODO change this will be an array of answers
}
