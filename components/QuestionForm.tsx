"use client";

import { FormEvent, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SelectMenu from '@components/SelectMenu';
import { tradesList } from '@consts';
import Button from '@components/Button';

interface QuestionFormProps {
    questionId?: string
}

interface MongoDataType {
    title: string;
    category: string;
    question: string;
}

const QuestionForm = ({ questionId }: QuestionFormProps) => {
    const [questionCategory, setQuestionCategory] = useState('Bricklaying');
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');

    const [mongoData, setMongoData] = useState<MongoDataType>({
        category: "",
        title: "",
        question: ""
    });

    const [loading, setLoading] = useState(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        console.log("%cparams from edit question", "color:green", questionId);

        if (questionId) {
            const getData = async () => {
                try {
                    const response = await fetch(`/api/question/${questionId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setQuestionCategory(data.category);
                        setTitle(data.title);
                        setQuestion(data.question);
                        setSubmitButtonDisabled(true);
                        setMongoData({
                            category: data.category,
                            title: data.title,
                            question: data.question
                        })
                    }
                } catch (error) {
                    console.error("There was an error while getting the data from the question route. Error: ", error);
                }
            }
            getData();
        }
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!session?.user.id) {
            alert("Only registered users can create questions. Please sign in and try again.");
            return;
        }

        try {
            setLoading(true);
            let response;

            if(questionId) {
                response = await fetch(`/api/question/update`, {
                    method: "PUT",
                    body: JSON.stringify({
                        title,
                        category: questionCategory,
                        question,
                        userId: session?.user.id,
                        questionId
                    })
                });
            } else {
                response = await fetch(`/api/question/new`, {
                    method: "POST",
                    body: JSON.stringify({
                        title,
                        category: questionCategory,
                        question,
                        userId: session?.user.id
                    })
                });
            }

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (question.length < 16 || title.length < 5) {
            setSubmitButtonDisabled(true)
        } else {
            setSubmitButtonDisabled(false);
        }

        if (questionId) {
            if (questionCategory === mongoData.category && title === mongoData.title && question === mongoData.question) {
                setSubmitButtonDisabled(true);
            } else {
                setSubmitButtonDisabled(false);
            }
        }
    }, [question, questionCategory, title])

    return (
        <div className='w-1/2 mx-auto mt-20 p-4'>
            <h1 className='text-4xl'>{questionId ? "Edit your question" : "Ask a Trade Related Question"}</h1>
            <div className='w-100 container_bg mt-6'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='flex flex-col'>
                            Question Category:
                        </label>
                        <SelectMenu options={tradesList} value={questionCategory} classes='w-full' onChange={(category) => { setQuestionCategory(category) }} />
                    </div>
                    <div>
                        <label className='flex flex-col mt-6'>
                            Title:
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='input_bg'
                                minLength={5}
                                required
                                placeholder='min 5 characterss'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='flex flex-col mt-6'>
                            Question:
                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className='input_bg'
                                placeholder='min 16 characters'
                            />
                        </label>
                    </div>
                    <Button type='submit' text='Submit' loading={loading} disabled={submitButtonDisabled} />
                </form>
            </div>
        </div>
    )
}

export default QuestionForm;