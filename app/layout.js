import { Navbar } from '@/components'
import './globals.css'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
  weight: ['400','700'],
  style: 'normal',
  subsets: ['latin'] ,
})

export const metadata = {
  title: 'IEEE CS',
  description: 'Computer Society',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <Navbar/>
        <main >
        {children}
          </main>
      </body>
    </html>
  )
}
