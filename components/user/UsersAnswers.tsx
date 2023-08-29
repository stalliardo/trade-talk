import AnswerCard from '@components/AnswerCard';
import GenericTable from '@components/table/GenericTable';
import { AnswerData } from '@types'
import React from 'react'

interface UserAnswersProps {
  data: AnswerData[];
  onDelete: (answer: AnswerData) => void;
}

const UsersAnswers = ({ data, onDelete }: UserAnswersProps) => {
  const handleDelete = async(answer: AnswerData) => {
    const confirmation = confirm(`Are you sure you want to delete this answer?`);

    if(confirmation){
      try {
        const response = await fetch(`/api/answer/${answer._id}`, {
          method: "DELETE"
        });

        if(response.ok){
          onDelete(answer);
        }
      
      } catch (error) {
        console.error("Error deleting the question");
      }
    }
  }

  return (
    <div className='w-full mt-4 overflow-x-scroll sm:overflow-x-auto'>
      <GenericTable<AnswerData>
        data={data}
        headers={['Answer']}
        renderRow={(answer) => (
          <>
            <td className='pl-2 pr-4 w-[80%]'>{answer.text}</td>
          </>
        )}
        onDelete={(answer) => handleDelete(answer)}
      />
    </div>
  )
}

export default UsersAnswers