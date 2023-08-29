import Image from "next/image";
import Link from "next/link";

interface WhyChooseProps {
  imgSrc: string;
  title: string;
  text: string
}

const WhyChooseCard = ({ imgSrc, title, text }: WhyChooseProps) => {
  return (
    <div className="container_bg sm:w-1/4 mb-8 rounded-lg p-3 inline-block">
      <Image src={imgSrc} width={70} height={100} alt="icon" className="mx-auto mt-3" />
      <h3 className="text-center text-lg font-bold text-orange-500 mt-3">{title}</h3>
      <p className="text-center text-gray-300">{text}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="sm:h-56 mb-6 text-center">
        <h1 className="text-6xl mt-8 sm:mt-16">Welcome to <span className="orange_gradient font-bold">TradeTalk</span></h1>
        <p className="text-lg mt-2">Your Expert Community for Trade-Related Questions!</p>
      </div>
      <div className="bg-slate-800 text-center px-6 sm:px-20">
        <p className="mt-6 sm:mt-24 text-lg">TradeTalk is a platform where skilled tradespeople come together to share knowledge, insights, and solutions. Whether you're a seasoned professional or just starting out, TradeTalk is your go-to destination for getting answers to your trade-related questions. Connect with fellow tradespeople, ask questions, share experiences, and find solutions that make a difference in your work.</p>
        <Link href="/question">
          <button className="button_bg my-10 w-[300px] border border-custom_border">Question Page</button>
        </Link>
      </div>
      <div className="sm:h-72 px-6">
        <h1 className="text-4xl text-center mt-12 text-orange-500 ">Why Choose TradeTalk?</h1>
        <div className="justify-between px-10 mt-10 flex flex-col sm:flex-row">
          <WhyChooseCard imgSrc="/connect.svg" title="Connect With Experts" text="Access a community of experienced tradespeople who understand the challenges you face." />
          <WhyChooseCard imgSrc="/question.svg" title="Ask and Learn" text="Have a burning question? Post it and get answers from the community's collective expertise." />
          <WhyChooseCard imgSrc="/share.svg" title="Share Insights" text="Share your own experiences and insights to help others facing similar challenges." />
        </div>
      </div>
      <div className="bg-slate-800 sm:h-56 sm:mt-36 text-center pb-10 px-12">
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