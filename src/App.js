import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;
