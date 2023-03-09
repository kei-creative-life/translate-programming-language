import './globals.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export const metadata = {
  title: 'Trans Programming',
  description: 'To translate from one programming language to another we can use the comments to specify the source and target languages.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='md:flex md:h-screen md:flex-col'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
