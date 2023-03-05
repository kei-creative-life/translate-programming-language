import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Trans Programming',
  description: 'To translate from one programming language to another we can use the comments to specify the source and target languages.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen flex-col'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
