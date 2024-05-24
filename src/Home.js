import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useInViewAnimation from './useInViewAnimation';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Blog } from './components/Blog';
import { NavBar } from './components/NavBar';

const Section = ({ title, children }) => {
  const { ref, inView } = useInViewAnimation();

  return (
    <div ref={ref} className={`pop-up ${inView ? 'in-view' : ''}`}>
      <div>
        <div className="resume-entry">
          {children}
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Section title="Banner">
        <Banner />
      </Section>
      <Section title="Skills">
        <Skills />
      </Section>
      <Section title="Projects">
        <Projects />
      </Section>
      <Section title="Blog">
        <Blog />
      </Section>
      <Section title="Contact">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

export default Home;
