
import Provider from '@components/Provider'
import './globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export const metadata = {
    title: "Trade Talk",
    description: "Discover and share AI prompts"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en w-1/2'>
            <body className='bg-custom_main'>
                <Provider>
                    <main>
                        <Navbar />
                        {children}
                        <div className='w-inherit'>
                            {/* <Footer /> */}
                        </div>
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout