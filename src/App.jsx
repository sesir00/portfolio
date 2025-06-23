import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import HeroSec from './Components/HeroSec'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skill from './Components/Skill'

function App() {
 
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <>
      <Navbar />
      <HeroSec />
      <Skill />
      <Project />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
