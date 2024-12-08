import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import PopularTests from './components/PopularTests/PopularTests';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <PopularTests />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;