import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/consts';

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-24 border-t border-custom_border'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image src="/hammer.svg" alt='logo' width={50} height={50} className='object-contain' />
                    <p className='text-base text-gray-700'>
                        TradeTalk 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className='footer__links w-[90%] flex justify-between border flex-wrap '>
                    {
                        footerLinks.map((link) => (
                            <div key={link.title} className='footer__link w-full'>
                                <h3 className='font-bold'>
                                    {link.title}
                                </h3>
                                {
                                    link.links.map((item) => (
                                        <Link key={item.title} href={item.url} className='text-gray-500 sm:mr-12'>
                                            {item.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* <div className='flex justify-between items-center flex-wrap mt-10 sm:px-16 px-6 py-10'>
                <p>
                    @2023 TradeTalk. All Rights Reserved
                </p>
                <div className='footer__copyrights-link'>
                    <Link href="/" className='text-gray-500'>Privacy Policy</Link>
                    <Link href="/" className='text-gray-500'>Terms of Use</Link>
                </div>

            </div> */}
        </footer>
    )
}

export default Footer