"use client";

import AnswerCard from '@components/AnswerCard';
import Spinner from '@components/Spinner';
import { AnswerData, QuestionData } from '@types';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react'

const ViewQuestionPage = ({ params }: { params: { id: string } }) => {
  const [question, setQuestion] = useState<QuestionData>();
  const { data: session } = useSession();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const response = await fetch(`/api/question/view/${params.id}`);
        const data = await response.json();

        setQuestion(data.question);
      } catch (error) {
        console.error("Error getting the question data from the api");
      } finally {
        setisLoading(false);
      }
    }

    getQuestion();
  }, [])

  const [answer, setAnswer] = useState("");

  const handleAnswerSubmitted = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAnswer: AnswerData = {
      text: answer,
      questionId: params.id,
      userId: session?.user.id,
    }

    try {
      const response = await fetch(`/api/question/answer`, {
        method: "POST",
        body: JSON.stringify(newAnswer)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.answer) {

          setQuestion((prev) => ({
            ...prev as QuestionData,
            answers: [...prev?.answers as AnswerData[], {...data.answer}]
          }))
        }
      }
    } catch (error) {
      console.error("error caught = ", error);
    }
  }

  return (
    <section>
      {
        !isLoading ?
          <div className="w-[90%] mt-16 mx-auto relative">
            <div className='flex'>
              <div className='w-1/2'>
                <h1 className='text-2xl font-bold'>{question?.title}</h1>
                <p className='text-gray-400 text-lg mb-4 w-full'>
                  {question?.question}
                </p>
              </div>

              <div className='w-1/2 pl-20 absolute right-0 top-2'>
                {/* if authed */}
                {
                  session?.user ?
                    <>
                      <p>Answer this question:</p>
                      <form className='flex flex-col' onSubmit={handleAnswerSubmitted}>
                        <textarea
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          className='input_bg w-full min-h-[200px]'
                          placeholder='min 16 characters'
                        />
                        <button type='submit' className='button_bg w-1/6 mt-4' disabled={answer.length < 16}>Submit</button>
                      </form>
                    </>
                    : <p className='text-xl text-right ' ><span className='text-orange-500 cursor-pointer' onClick={() => signIn()}>Log in</span> to answer this question</p>
                }
              </div>
            </div>
            {/* Diplay the ansers if any found */}
            {
              question?.answers.length ?
                <div>
                  <p className='mt-2 mb-4'>{`${question.answers.length} answer(s)`}</p>
                  {
                    question.answers.map((a: AnswerData) => (
                      <AnswerCard key={a._id || a.text} data={a} />
                    ))
                  }
                </div>
                : <div>No answers have been provided yet.</div>
            }
          </div> :
          <Spinner classes='mt-32' />
      }
    </section>
  )
}

export default ViewQuestionPage;