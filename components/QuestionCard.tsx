import { QuestionData } from "@types"
import { useRouter } from "next/navigation";

interface QuestionCardProps {
    question: QuestionData;
    itemSelected?: () => void;
}

const QuestionCard = ({ question }: QuestionCardProps) => {

    const router = useRouter();

    return (
        <div className=" w-full text-left p-4 bg-slate-800 border border-b border-custom_border mb-3 flex justify-between cursor-pointer hover:bg-slate-700" onClick={() => router.push(`/question/view/${question._id}`)}>
            <div className="w-1/4">
                <p className="text-sky-200">{question.title}</p>
            </div>
            <div className="w-1/4">
                <p>{question.category}</p>
            </div>
            <div className="w-1/6">
                <p>{question.views}</p>
            </div>
            <div className="w-1/6">
                <p>10</p>
            </div>
        </div>
    )
}

export default QuestionCard