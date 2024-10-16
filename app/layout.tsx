// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'Welcome to My Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans min-h-screen flex flex-col`}>
        <Header />
        {/* 헤더와 페이지 콘텐츠가 겹치지 않도록 패딩 추가 */}
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
