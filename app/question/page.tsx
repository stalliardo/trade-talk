import Search from '@components/Search'
import SearchResults from '@components/SearchResults'
import React from 'react'

const QuestionHomePage = () => {
  return (
    <section>
      <div className="h-[150px] text-center">
        <h1 className="text-6xl mt-16"><span className="orange_gradient font-bold">TradeTalk</span> Questions</h1>
        <p className="text-lg mt-6">Have a trade related question? Well, you've come to the right place. Search or browse the questions below.</p>
      </div>

      <div className="h-72 border text-center px-20 max-w-7xl mx-auto mt-10">
        <div>
          <h2 className='text-xl text-left'>Ask Tradesman for Advice:</h2>
          <Search />
        </div>

        <div>
          <SearchResults />
        </div>
      </div>
    </section>
  )
}

export default QuestionHomePage