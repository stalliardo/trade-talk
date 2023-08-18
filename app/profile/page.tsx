"use client";

import UsersAnswers from "@components/user/UsersAnswers";
import UsersQuestions from "@components/user/UsersQuestions";
import { useSession } from "next-auth/react";

const ProfilePage = () => {

  const { data: session } = useSession();

  return (
    <section className="border w-3/4 mx-auto mt-12">
      <h1 className="text-3xl">Your Profile</h1>

      <div className="relative px-4 mt-6">
        <div className="border w-1/4">
          <label className="text-gray-400 text-xl">Name:</label>
          <p className="text-2xl">{session?.user.name}</p>
        </div>

        <div className="border w-1/4 mt-6">
          <label className="text-gray-400 text-xl">Email:</label>
          <p className="text-2xl">{session?.user.email}</p>
        </div>

        <div className="absolute right-0 bottom-0">
          <button className="button_bg_danger">Delete Account</button>
        </div>
      </div>

      <div className="w-full border display flex mt-12 px-4">
        <div className="border border-red-600 w-1/2 h-12">
          <h2 className="text-2xl">Questions Posted:</h2>
          <UsersQuestions />
        </div>

        <div className="border border-red-600 w-1/2 h-12">
          <h2 className="text-2xl">Answers Posted:</h2>
          <UsersAnswers />
        </div>
      </div>
    </section>
  )
}

export default ProfilePage;