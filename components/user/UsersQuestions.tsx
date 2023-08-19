"use client";

import DisplayQuestions from '@components/DisplayQuestions';
import GenericTable from '@components/table/GenericTable';
import { QuestionData } from '@types';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'


interface UserQuestionProps {
  data: QuestionData[];
}

const UsersQuestions = ({ data }: UserQuestionProps) => {

  console.log("data from questions = ", data);

  const handleEdit = (question: QuestionData) => {

  }
  const handleDelete = (question: QuestionData) => {

  }
  return (
    <div className='w-full mt-4'>
      <GenericTable<QuestionData>
        data={data}
        headers={['Title', 'Category', 'Views', 'Answers']}
        renderRow={(question) => (
          <>
            <td className=''>{question.title}</td>
            <td className=''>{question.category}</td>
            <td className=' w-[10%]'>{question.views.length}</td>
            <td className=' w-[10%]'>{question.answers.length}</td>
          </>
        )}
        onEdit={(question) => handleEdit(question)}
        onDelete={(question) => handleDelete(question)}
      />
    </div>
  )
}

export default UsersQuestions