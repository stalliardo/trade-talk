import AnswerCard from '@components/AnswerCard';
import { AnswerData } from '@types'
import React from 'react'

interface UserAnswersProps {
  data: AnswerData[];
}

const UsersAnswers = ({ data }: UserAnswersProps) => {
  console.log("%canswerDara", "color:red", data);
  return (
    <div className='border w-full'>
      {
        data.length ?
          <div>
            {
              data.map((a: AnswerData) => (
                <AnswerCard key={a._id || a.text} data={a} />
              ))
            }
          </div> :
          <div></div>
      }
    </div>
  )
}

export default UsersAnswers