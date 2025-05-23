import { useState } from 'react'
import './App.css'
import About from './Component/About'
import NavBar from './Component/NavBar'
import Services from './Component/Services'
import Products from './Component/Products'
import Photos from './Component/Photos'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Testimonils from './Component/Testimonils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-50 text-gray-800 font-sans">
        <NavBar />
        <main className="px-4 sm:px-6 lg:px-8 space-y-12">
          <About />
          <Services />
          <Products />
          <Photos />
          <Testimonils />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
