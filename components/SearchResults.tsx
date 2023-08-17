import { QuestionData } from "@types"
import QuestionCard from "./QuestionCard";


interface SearchResultsProps {
  data: QuestionData[];
}

const mockedData = [
  
    {title: "This is a title", category: "Bricklaying", views: 2, answers: 2, question: "This is a question", createdOn: "2020-12-12", _id: "some r=idd", creator: "darrens id"},
    {title: "This is a brickwork question", category: "Carpentry", views: 2, answers: 2, question: "This is a question", createdOn: "2020-12-12", _id: "some r=ids", creator: "darrens id"},
    {title: "This is a chippy question a title", category: "Fencing", views: 2, answers: 2, question: "This is a question", createdOn: "2020-12-12", _id: "some r=id2", creator: "darrens id"},
    {title: "This is a fish", category: "Roofing", views: 2, answers: 2, question: "This is a question", createdOn: "2020-12-12", _id: "some r=id", creator: "darrens id3"},
    {title: "Where the hell is the boiler", category: "Bricklaying", views: 2, answers: 2, question: "This is a question", createdOn: "2020-12-12", _id: "some r=id4", creator: "darrens id"},
  
]
const SearchResults = ({ data }: SearchResultsProps) => {

  console.log("data passed in = ", data);
  return (
    <div>
      <div className="flex flex-col mt-16">
        {mockedData.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults