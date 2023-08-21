"use client";

import UsersAnswers from "@components/user/UsersAnswers";
import UsersQuestions from "@components/user/UsersQuestions";
import { AnswerData, QuestionData } from "@types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {

  const { data: session } = useSession();

  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [answers, setAnswers] = useState<AnswerData[]>([]);

  useEffect(() => {
    const getUserData = async () => {

      try {
        const response = await fetch(`/api/userData/${session?.user.id}`);
        if (response.ok) {
          const data = await response.json();

          if (data.questions.length) {
            setQuestions(data.questions);
          }

          if (data.answers.length) {
            setAnswers(data.answers);
          }
        }

      } catch (error) {
        console.error("Error getting users questions. Error: ", error);
      } finally {
        // TODO set is loading
      }
    }
    if (session?.user.id) {
      getUserData();
    }
  }, [session?.user]);

  return (
    <section className="border w-3/4 mx-auto mt-12">
      <h1 className="text-3xl">Your Profile</h1>

      <div className="relative px-4 mt-6">
        <div className=" w-1/4">
          <label className="text-gray-400 text-xl">Name:</label>
          <p className="text-2xl">{session?.user.name}</p>
        </div>

        <div className=" w-1/4 mt-6">
          <label className="text-gray-400 text-xl">Email:</label>
          <p className="text-2xl">{session?.user.email}</p>
        </div>

        <div className="absolute right-4 bottom-0">
          <button className="button_bg_danger">Delete Account</button>
        </div>
      </div>

      <div className="px-4">
        <div className=" w-full mt-16">
          <h2 className="text-xl">Questions Posted: <span className="text-orange-500">{questions ? questions.length : 0}</span></h2>
          <UsersQuestions data={questions} />
        </div>
      </div>
      {/* <div className="border border-red-600 w-full h-12">
          <h2 className="text-2xl">Answers Posted: <span className="text-orange-500">{answers ? answers.length : 0}</span></h2>
          <UsersAnswers data={answers}/>
        </div> */}

    </section>
  )
}

export default ProfilePage;