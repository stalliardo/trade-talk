import { QuestionData } from "@types"
import { useRouter } from "next/navigation";

interface QuestionCardProps {
    question: QuestionData;
    itemSelected?: () => void;
}

const QuestionCard = ({ question }: QuestionCardProps) => {

    const router = useRouter();

    return (
        <div className=" w-full text-left p-4 bg-slate-800 border border-b border-custom_border mb-3 flex justify-between cursor-pointer" onClick={() => router.push(`/question/view/${question._id}`)}>
            <div className="border border-green-300 w-1/4">
                <p>{question.title}</p>
            </div>
            <div className="border border-green-400 w-1/4">
                <p>{question.category}</p>
            </div>
            <div className="border border-green-500 w-1/6">
                <p>{question.views}</p>
            </div>
            <div className="border border-green-600 w-1/6">
                <p>10</p>
            </div>
        </div>
    )
}

export default QuestionCard