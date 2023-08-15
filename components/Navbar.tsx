"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const {data: session} = useSession();
    return (
        <nav className='bg-slate-700 p-4 flex justify-between'>
            {/* icon */}
            <div className='flex items-center'>
                <Image src="/hammer.svg" width={40} height={40} alt="hammer" />
                <p className='text-3xl ml-4 orange_gradient font-bold'>Trade Talk</p>
            </div>
            {/* links */}
            <div className='flex items-center'>
                {
                    session === null && <p className='mr-4 pr-4 border-r border-orange-600 hover:text-orange-500 cursor-pointer'>Stalliardo</p>
                }
                <Link href="/" className='mr-3 hover:text-orange-500'>About</Link>
                <Link href="/" className='mr-3 hover:text-orange-500'>Contact</Link>

                {
                    session !== null ?
                    <Link href="/" className='mr-3 hover:text-orange-500'>Log Out</Link> :
                    <Link href="/" className='mr-3 hover:text-orange-500'>Log In</Link>
                }
            </div>
        </nav>
    )
}

export default Navbar