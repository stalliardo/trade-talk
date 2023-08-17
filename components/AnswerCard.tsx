import { AnswerData } from '@types'
import React from 'react'

interface AnswerCardProps {
    data: AnswerData
}

const AnswerCard = ({data}: AnswerCardProps) => {
  return (
    <div>
        <p>{data.text}</p>
    </div>
  )
}

export default AnswerCard