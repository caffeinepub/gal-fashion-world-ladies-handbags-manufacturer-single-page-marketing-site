import { Hero } from './components/Hero';
import { BagGallery } from './components/BagGallery';
import { About } from './components/About';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BagGallery />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
