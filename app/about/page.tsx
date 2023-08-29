const AboutPage = () => {
    return (
      <section className="text-white w-[80%] mx-auto p-1 sm:p-3 pb-10 mt-6">
        <h1 className="text-4xl text-center text-orange-500">About Trade Talk</h1>
        <p className="text-lg my-4">Welcome to Trade Talk, a platform I've created to help you find trade related advice</p>
  
        <h2 className="text-3xl text-blue-300">My Goal</h2>
        <p className="text-lg my-4">
          At Trade Talk, my goal is to make it easier for tradesman or diy enthusiasts to reach out and share their knowledge.
        </p>
  
        <h2 className="text-3xl text-blue-300">How it Works</h2>
        <p className="text-lg my-4">
            You either search for a question you want the answer for. Or, you can register and answer questions to help others.
        </p>
  
        <h2 className="text-3xl text-blue-300">Technologies Used</h2>
        <ul className="ml-8 text-lg my-4">
          <li className="list-disc">
            <span className="font-bold">Next.js:</span>
            <p>My site is built using the Next.js framework, which provides a seamless and efficient user experience.</p>
          </li>
          <li className="list-disc">
            <span className="font-bold">Vercel:</span>
            <p>I've deployed my app using Vercel, a reliable platform that ensures fast and secure hosting.</p>
          </li>
        </ul>
  
        <p>Thank you for using Trade Talk. I hope you enjoy the app and find the answers you need!</p>
      </section>
    )
  }
  
  export default AboutPage