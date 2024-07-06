import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Landing from './Landing';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <br/><br/><br/>
      <Landing/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
