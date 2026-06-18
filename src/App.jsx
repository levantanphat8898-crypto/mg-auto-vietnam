import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Products from './components/Products'
import Promotions from './components/Promotions'
import Contact from './components/Contact'
import Commitments from './components/Commitments'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <Promotions />
        <Contact />
        <Commitments />
      </main>
      <Footer />
    </>
  )
}
