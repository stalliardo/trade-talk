export interface Profile {
    email: string;
    name: string;
    picture: string;
    username?: string;
    _id?: string;
}

export interface QuestionData {
    createdOn: Date | string;
    creator: string;
    title: string;
    category: string;
    question: string;
    _id: string;
    views: number;
    answers: number; // TODO change this will be an array of answers
}
