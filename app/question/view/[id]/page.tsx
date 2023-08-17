"use client";

import AnswerCard from '@components/AnswerCard';
import { AnswerData, QuestionData } from '@types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'

const ViewQuestionPage = ({ params }: { params: { id: string } }) => {

  const [question, setQuestion] = useState<QuestionData | null>(null);
  const { data: session } = useSession();

  useEffect(() => {

    console.log("user = ", session?.user);

    const getQuestion = async () => {
      const response = await fetch(`/api/question/view/${params.id}`);
      const data = await response.json();

      console.log("data from /apiquestion/view = ", data.question);

      setQuestion(data.question);
    }

    getQuestion();
  }, [])

  const [answer, setAnswer] = useState("");

  const handleAnswerSubmitted = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit anser called");

    try {
      const response = await fetch(`/api/question/answer`, {
        method: "POST",
        body: JSON.stringify({
          text: answer,
          questionId: params.id,
          userId: session?.user.id
        })
      });

      if (response.ok) {
        console.log("response okay called");
        // TODO what do we do after posting an answer?
      }
    } catch (error) {
      console.log("error caught = ", error);
    }
  }

  return (
    <section>
      <div className="max-w-7xl border mt-16 pl-32">
        <h1 className='text-2xl'>{question?.title}</h1>
        <p className='text-gray-300 text-lg mb-16'>
          {question?.question}
        </p>

        {/* if authed */}
        {
          session?.user ?
            <>
              <p>Answer this question:</p>
              <form className='flex flex-col' onSubmit={handleAnswerSubmitted}>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className='input_bg w-1/2'
                  placeholder='min 16 characters'
                />

                <button type='submit' className='button_bg w-1/4 mt-4' disabled={answer.length < 16}>Submit</button>
              </form>
            </>
            : null
        }

        {/* Diplay the ansers if any found */}

        {
          question?.answers.length ?
            <div>
              <p className='mt-12'>{`${question.answers.length} answer(s)`}</p>
              {
                question.answers.map((answer: AnswerData) => (
                  <AnswerCard key={answer._id} data={answer}/>
                ))
              }
            </div>
            : <div>No answers have been provided yet.</div>
        }
      </div>
    </section>
  )
}

export default ViewQuestionPage;

