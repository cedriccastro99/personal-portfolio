import Footer from '@/pages/Footer'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col min-h-screen max-w-screen-md w-full mx-auto px-4 sm:px-6 md:px-8 py-10 border-l-2 border-r-2 border-dashed border-muted/50">
      {children}
      <Footer />
    </main>
  )
}

export default Layout