import { AnswerData } from '@types'
import { format } from 'date-fns';

interface AnswerCardProps {
  data: AnswerData
}


const AnswerCard = ({ data }: AnswerCardProps) => {
  console.log("data from answer card = ", data);

  const isoDate = data.createdOn;
  const parsedDate = new Date(isoDate);
  const formattedDate = format(parsedDate, "do MMM yyyy");

  return (
    <div className='container_bg w-1/2 mt-4'>
      <p className='text-orange-500'>
        {typeof data.creator === "string"
          ? "Creator ID: " + data.creator
          : data.creator.username}
      </p>

      <p className='mt-3'>
        {data.text}
      </p>

      <p className='text-gray-600 mt-4'>{formattedDate}</p>
    </div>
  )
}

export default AnswerCard