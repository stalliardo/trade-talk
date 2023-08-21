"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className='bg-custom_secondary p-4 flex justify-between'>
            {/* icon */}
            <Link href="/">
                <div className='flex items-center'>
                    <Image src="/hammer.svg" width={40} height={40} alt="hammer" />
                    <p className='text-3xl ml-4 orange_gradient font-bold'>TradeTalk</p>
                </div>
            </Link>
            {/* links */}
            <div className='hidden sm:flex items-center'>
                {
                    session !== null &&
                    <div className='flex items-center'>
                        <Link href="/question/new" className='mr-3 hover:text-orange-500'>
                            Create Question
                        </Link>
                        <Link href='/profile' className='mr-6 pr-6 hover:text-orange-500 border-r border-orange-500'>
                            {session?.user.name}
                        </Link>
                    </div>
                }
                <Link href="/" className='mr-3 hover:text-orange-500'>About</Link>
                <Link href="/" className='mr-3 hover:text-orange-500'>Contact</Link>

                {
                    session !== null ?
                        <p className='mr-4 pr-4 hover:text-orange-500 cursor-pointer' onClick={() => signOut()}>Log Out</p> :
                        <p className='mr-4 pr-4 hover:text-orange-500 cursor-pointer' onClick={() => signIn()}>Log In</p>
                }
            </div>
        </nav>
    )
}

export default Navbar