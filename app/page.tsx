import Image from "next/image";

interface WhyChooseProps {
  imgSrc: string;
  title: string;
  text: string
}

const WhyChooseCard = ({ imgSrc, title, text }: WhyChooseProps) => {
  return (
    <div className="container_bg w-1/4 rounded-lg p-3 inline-block">
      <Image src={imgSrc} width={70} height={100} alt="icon" className="mx-auto mt-3" />
      <h3 className="text-center text-lg font-bold text-orange-500 mt-3">{title}</h3>
      <p className="text-center text-gray-300">{text}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-56 text-center">
        <h1 className="text-5xl mt-16">Welcome to <span className="orange_gradient font-bold">TradeTalk</span></h1>
        <p className="text-lg mt-2">Your Expert Community for Trade-Related Questions!</p>
      </div>
      <div className="h-72 bg-slate-800 text-center px-20">
        <p className="mt-24 text-lg">TradeTalk is a platform where skilled tradespeople come together to share knowledge, insights, and solutions. Whether you're a seasoned professional or just starting out, TradeTalk is your go-to destination for getting answers to your trade-related questions. Connect with fellow tradespeople, ask questions, share experiences, and find solutions that make a difference in your work.</p>
      </div>
      <div className="h-72 px-6">
        <h1 className="text-4xl text-center mt-16 text-orange-500 ">Why Choose TradeTalk?</h1>
        <div className="flex justify-between px-10 mt-10">
          <WhyChooseCard imgSrc="/connect.svg" title="Connect With Experts" text="Access a community of experienced tradespeople who understand the challenges you face." />
          <WhyChooseCard imgSrc="/question.svg" title="Ask and Learn" text="Have a burning question? Post it and get answers from the community's collective expertise." />
          <WhyChooseCard imgSrc="/share.svg" title="Share Insights" text="Share your own experiences and insights to help others facing similar challenges." />
        </div>
      </div>
      <div className="bg-slate-800 h-56 mt-36 text-center px-12">
        <h1 className="text-4xl  mt-8">Getting Started</h1>
        <div className="text-center">
          <p className="mt-2">1. Create an account or log in to join the conversation.</p>
          <p className="mt-2">2. Ask your first question or explore questions from others.</p>
          <p className="mt-2">3. Share your insights, advice, and experiences to help fellow tradespeople.</p>
        </div>
      </div>
    </main>
  )
}
