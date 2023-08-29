import QuestionForm from '@components/QuestionForm'
import React from 'react'

const EditQuestionPage = ({params}: {params: {id: string}}) => {
  return (
    <QuestionForm questionId={params.id}/>
  )
}

export default EditQuestionPage