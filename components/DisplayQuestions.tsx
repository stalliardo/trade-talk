import { QuestionData } from "@types"
import QuestionCard from "./QuestionCard";

interface DisplayQuestionsProps {
  data: QuestionData[];
}

const DisplayQuestions = ({ data }: DisplayQuestionsProps) => {
  return (
    <div>
      <div className="flex flex-col mt-16">
      <div className=" w-full text-left px-4 border-custom_border mb-3 flex justify-between cursor-pointer">
            <div className="w-1/4">
                <p>Title</p>
            </div>
            <div className="w-1/4">
                <p>Category</p>
            </div>
            <div className="w-1/6">
                <p>Views</p>
            </div>
            <div className="w-1/6">
                <p>Answers</p>
            </div>
        </div>
        {data.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </div>
  )
}

export default DisplayQuestions