"use client";

import Filter from '@components/Filter';
import Search from '@components/Search'
import SearchResults from '@components/SearchResults'
import { QuestionData } from '@types';
import React, { useEffect, useState } from 'react'

const QuestionHomePage = () => {

  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/question");
      const data = await response.json();

      console.log("data = ", data);

      if(data.questions && data.questions.length){
        setData(data.questions);
      }
    }

    getData();
  }, [])

  const filterData = (filter: string) => {
    if(filter === "Unanswered"){
      return data.filter((item: QuestionData) => item.answers.length === 0);
    } else if(filter === "Answered") {
     return data.filter((item: QuestionData) => item.answers.length > 0)
    }

    return data;
  }

  const handleFilterSelected = (filter: string) => {
    const filteredData = filterData(filter);
    setData(filteredData);
  }

  return (
    <section>
      <div className="h-[150px] text-center">
        <h1 className="text-6xl mt-16"><span className="orange_gradient font-bold">TradeTalk</span> Questions</h1>
        <p className="text-lg mt-6">Have a trade related question? Well, you've come to the right place. Search or browse the questions below.</p>
      </div>

      <div className="border text-center px-20 max-w-7xl mx-auto mt-10 h-fit py-10">
        <div>
          <h2 className='text-xl text-left'>Ask Tradesman for Advice:</h2>
          <Search />
        </div>

        <div>
          <Filter filterSelected={handleFilterSelected}/>
        </div>

        <div>
          {
            data.length ?
            <SearchResults data={data}/> : null
          }
        </div>
      </div>
    </section>
  )
}

export default QuestionHomePage