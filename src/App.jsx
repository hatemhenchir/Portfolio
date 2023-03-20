import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import SocialApp from "./components/SocialApp";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home/>
        <SocialApp/>
        <About/>
        <Work/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
