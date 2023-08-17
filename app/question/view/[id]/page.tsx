"use client";

import { useEffect } from 'react'

const ViewQuestionPage = ({params}: { params: {id: string}}) => {

    // useEffect(() => { // TODO reinstate
    //     const incrementViews = async () => {
    //         const response = await fetch(`/api/question/view/${params.id}`);
    //         const data = await response.json();
    //     }

    //     incrementViews();
    // }, [])
  return (
    <div>ViewQuestionPage</div>
  )
}

export default ViewQuestionPage