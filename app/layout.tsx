
import Provider from '@components/Provider'
import './globals.css'
import Navbar from '@components/Navbar'

export const metadata = {
    title: "PromptVista",
    description: "Discover and share AI prompts"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Navbar />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout