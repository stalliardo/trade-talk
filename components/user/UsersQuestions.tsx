"use client";

import DisplayQuestions from '@components/DisplayQuestions';
import { QuestionData } from '@types';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const UsersQuestions = () => {

  const {data: session} = useSession();
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  useEffect(() => {
    const getUserData = async () => {

      try {
        const response = await fetch(`/api/userData/${session?.user.id}`);
        if(response.ok){
          const data = await response.json();

          console.log("data from res = ", data);
          if(data.length) {
            setQuestions(data);
          }
        }
        
      } catch (error) {
        console.error("Error getting users questions. Error: ", error);
      } finally {
        // TODO set is loading
      }
    }
    if(session?.user.id) {
      getUserData();
    }
  }, [session?.user]);

  return (
    <div className='border w-full'>
        {
          questions.length ? 
          <div>
            <DisplayQuestions data={questions}/>
          </div> : 
          <div></div>
        }
    </div>
  )
}

export default UsersQuestions