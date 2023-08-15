

"use client";







import User from '@models/user'
import { connectToDB } from '@utils/database';
import React from 'react'

const Auth = () => {

    const addUser = async () => {
        
        try {
            
            const response = await fetch("/api/temp");
            const data = await response.json();

            if(!response.ok) {
                console.log("error code: ", response.status);
                console.log("error: ", data.error);
            }
        } catch (error) {
            console.log("error caught error: ", error);
        }
       
    }
    return (
        <div>
            <div>
                <h1>Test adding user to mongo</h1>
                <button className='bg-blue-800' onClick={addUser}>Test adding user</button>
            </div>
        </div>
    )
}

export default Auth