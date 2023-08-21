import AnswerCard from '@components/AnswerCard';
import GenericTable from '@components/table/GenericTable';
import { AnswerData } from '@types'
import React from 'react'

interface UserAnswersProps {
  data: AnswerData[];
}

const UsersAnswers = ({ data }: UserAnswersProps) => {


  const handleEdit = (question: AnswerData) => {
    console.log("edit clicked + q  =", question);

  }
  const handleDelete = (question: AnswerData) => {
    console.log("deleet clicked + q  =", question);

  }


  console.log("%canswerDara", "color:red", data);
  return (
    <div className='w-full mt-4'>
      <GenericTable<AnswerData>
        data={data}
        headers={['Answer']}
        renderRow={(answer) => (
          <>
            <td className='pl-2 w-[80%]'>{answer.text}</td>
            {/* <td className='pl-2'>{answer.category}</td>
            <td className='pl-2 w-[10%]'>{answer.views.length}</td>
            <td className='pl-2 w-[10%]'>{answer.answers.length}</td> */}
          </>
        )}
        onEdit={(answer) => handleEdit(answer)}
        onDelete={(answer) => handleDelete(answer)}
      />
    </div>
  )
}

export default UsersAnswers