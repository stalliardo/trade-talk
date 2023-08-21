"use client";

import DisplayQuestions from '@components/DisplayQuestions';
import GenericTable from '@components/table/GenericTable';
import { QuestionData } from '@types';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


interface UserQuestionProps {
  data: QuestionData[];
  onDelete: (question: QuestionData) => void;
}

const UsersQuestions = ({ data, onDelete }: UserQuestionProps) => {

  console.log("data from questions = ", data);

  const router = useRouter();

  const handleDelete = async (question: QuestionData) => {
    const confirmation = confirm(`Are you sure you want to delete "${question.title}"?`);

    console.log("deleete called + q id = ", question._id);

    if(confirmation){
      try {
        const response = await fetch(`/api/question/delete/${question._id}`, {
          method: "DELETE"
        });

        if(response.ok){
          // remove / filter out from the proffile page
          onDelete(question);
        }
      
      } catch (error) {
        console.error("Error deleting the question");
      }
    }
  }
  return (
    <div className='w-full mt-4'>
      <GenericTable<QuestionData>
        data={data}
        headers={['Title', 'Category', 'Views', 'Answers']}
        renderRow={(question) => (
          <>
            <td className='pl-2'>{question.title}</td>
            <td className='pl-2'>{question.category}</td>
            <td className='pl-2 w-[10%]'>{question.views.length}</td>
            <td className='pl-2 w-[10%]'>{question.answers.length}</td>
          </>
        )}
        onEdit={(question) => router.push(`/question/edit/${question._id}`)}
        onDelete={(question) => handleDelete(question)}
        onView={(question) => router.push(`/question/view/${question._id}`)}
      />
    </div>
  )
}

export default UsersQuestions