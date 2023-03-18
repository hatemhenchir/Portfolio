import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
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
      </main>
    </div>
  );
}

export default App;
