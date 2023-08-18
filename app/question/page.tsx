"use client";

import Filter from '@components/Filter';
import Search from '@components/Search'
import DisplayQuestions from '@components/DisplayQuestions'
import Spinner from '@components/Spinner';
import { QuestionData } from '@types';
import React, { useEffect, useState } from 'react'

const QuestionHomePage = () => {

  const [data, setData] = useState<QuestionData[]>([]);
  const [fData, setFData] = useState<QuestionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/question");
        const data = await response.json();

        if (data.questions && data.questions.length) {
          setData(data.questions);
          setFData(data.questions);
        }
      } catch (error) {

      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [])

  const filterData = (filter: string) => {
    let tempData: QuestionData[];

    if (filter === "Unanswered") {
      tempData = data.filter((item: QuestionData) => item.answers.length === 0);
    } else if (filter === "Answered") {
      return tempData = data.filter((item: QuestionData) => item.answers.length > 0)
    }
    else if (filter === "All") tempData = data;
    else {
      tempData = data;
    }

    return tempData;
  }

  const handleFilterSelected = (filter: string) => {
    const filteredData = filterData(filter);
    setFData(filteredData);
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
          <Search 
            onSearchResult={(question) => setFData(question)}
            onResetData={() => setFData(data)}
          />
        </div>

        <div>
          <Filter filterSelected={handleFilterSelected} />
        </div>
        {
          !isLoading ?
            <div>
              {
                data.length ?
                  <DisplayQuestions data={fData} /> : null
              }
            </div> :
            <Spinner />
        }
      </div>

    </section>
  )
}

export default QuestionHomePage