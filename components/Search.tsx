"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';


const Search = () => {

    const [searchText, setSearchText] = useState("");
    const [searchButtonDisabled, setSearchButtonDisabled] = useState(true);

    useEffect(() => {
        if(searchText.length > 3) {
            setSearchButtonDisabled(false);
        }
        else {
            setSearchButtonDisabled(true);

        }
    }, [searchText]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/question/search?q=${searchText}`);
            const data = await response.json();

            console.log("data = ", data);

            if(data.questions.length === 0) {
                console.log("no questions found");
            } else {
                console.log("questions found: ", data.questions);
            }
        } catch (error) {
            
        }

    }

    return (
        <div className='text-left '>
            <form onSubmit={handleSubmit} className='flex justify-between items-center'>
                <input type='text' value={searchText} placeholder='Seach Questions' className='input_bg w-[95%]' onChange={(e) => setSearchText(e.target.value)} />
                <button className='button_bg h-10 mt-[8px]' disabled={searchButtonDisabled} type='submit'>
                    <Image src='/search.svg' width={30} height={10} alt='search-logo' className='h-5' />
                </button>
            </form>
        </div>
    )
}

export default Search