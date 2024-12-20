import './styles/globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import { createContext, Dispatch, useState } from 'react'

type ContextType = {
  theme: string;
  setTheme: Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType | null>(null);

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value = {{theme , setTheme}}>
      <div className={`container ${theme}`}>
        <Header />
        <main className="main">
          <Hero />
          <TechStack />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
