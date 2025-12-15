import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Background3D from './components/Background3D';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Background3D />
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="relative z-10">{renderPage()}</main>
      </div>
    </ThemeProvider>
  );
}

export default App;
