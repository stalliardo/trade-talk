"use client";

import Spinner from "@components/Spinner";
import UsersAnswers from "@components/user/UsersAnswers";
import UsersQuestions from "@components/user/UsersQuestions";
import { AnswerData, QuestionData } from "@types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {

  const { data: session } = useSession();

  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      }
    }
    if (session?.user.id) {
      getUserData();
    }
  }, [session?.user]);

  const handleQuestionDeleted = (q: QuestionData) => {
    const filteredData = questions.filter((question) => question._id !== q._id);
    setQuestions(filteredData);
  }

  const handleAnswerDeleted = (a: AnswerData) => {
    const filteredData = answers.filter((answer) => answer._id !== a._id);
    setAnswers(filteredData);
  }

  const handleDeleteAccount = () => {
    const confirmation = ("Are you sure you want to delete your account? This will delete all questions and answers and cannot be undone!");

    if(confirmation){
      // TODO call the '/api/user/id' DELETE endpoint
    }
  }

  return (
    isLoading ? <Spinner classes="mt-32" /> :
      <section className="w-full sm:w-3/4 mx-auto mt-12">
        <h1 className="text-3xl pl-2 sm:pl-0">Your Profile</h1>

        <div className="relative px-4 mt-6">
          <div className=" w-1/4">
            <label className="text-gray-400 text-lg">Name:</label>
            <p className="text-2xl">{session?.user.name}</p>
          </div>

          <div className=" w-1/4 mt-6">
            <label className="text-gray-400 text-lg">Email:</label>
            <p className="text-2xl">{session?.user.email}</p>
          </div>

          <div className="sm:hidden mt-6">
            <button className="button_bg_danger" onClick={handleDeleteAccount}>Delete Account</button>
          </div>

          <div className="hidden sm:block absolute right-4 bottom-0">
            <button className="button_bg_danger" onClick={handleDeleteAccount}>Delete Account</button>
          </div>
        </div>

        <div className="px-4">
          <div className=" w-full mt-16">
            <h2 className="text-xl">Questions Posted: <span className="text-orange-500">{questions ? questions.length : 0}</span></h2>
            <UsersQuestions data={questions} onDelete={handleQuestionDeleted} />
          </div>
        </div>

        <div className="px-4 mt-16">
          <div className="w-full h-12">
            <h2 className="text-xl">Answers Posted: <span className="text-orange-500">{answers ? answers.length : 0}</span></h2>
            <UsersAnswers data={answers} onDelete={handleAnswerDeleted} />
          </div>
        </div>
      </section>
  )
}

export default ProfilePage;