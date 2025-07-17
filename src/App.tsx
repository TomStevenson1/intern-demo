import React from 'react';
import Navbar from './components/ui/navbar';
import Header from './components/sections/Header';
import About from './components/sections/About';
import Timeline from './components/sections/Timeline';
import DevOpsOverview from './components/sections/DevOpsOverview';
import CICDSection from './components/sections/CICDSection';
import Contact from './components/sections/Contact';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Header />
        <About />
        <Timeline />
        <DevOpsOverview />
        <CICDSection />
        <Contact />
      </div>
    </div>
  );
};

export default App;
