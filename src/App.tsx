import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
// import Guarantee from './components/Guarantee';
import TheoryOfChange from './components/TheoryOfChange';
import DNASuccess from './components/DNASuccess';
import Statistics from './components/Statistics';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ClientTrust from './components/ClientTrust';
import ContactForm from './components/ContactForm';
import AwardsSection from './components/AwardsSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Programs />
      {/* <Guarantee /> */}
      <TheoryOfChange />
      <DNASuccess />
      {/* <ClientTrust /> */}
      <Statistics />
      {/* <Partnerships /> */}
      <AwardsSection/>
      <ContactForm/>
      {/* <Contact /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;