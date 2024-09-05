import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
