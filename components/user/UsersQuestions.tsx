"use client";

import DisplayQuestions from '@components/DisplayQuestions';
import { QuestionData } from '@types';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'


interface UserQuestionProps {
  data: QuestionData[];
}

const UsersQuestions = ({data}: UserQuestionProps) => {

  console.log("data from questions = ", data);

  return (
    <div className='border w-full'>
        {
          data.length ? 
          <div>
            <DisplayQuestions data={data}/>
          </div> : 
          <div></div>
        }
    </div>
  )
}

export default UsersQuestions