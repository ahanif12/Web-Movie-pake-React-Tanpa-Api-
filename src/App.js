import './App.css';
import NavigationBar from './components/Navigation';
import Intro from './components/Intro';
import Superhero from './components/Superhero'
import Trending from './components/Trending'
import './style/landingPage.css'

function App() {
  return (
    <div>
      { /* Intro Section */ }
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
    { /* end of intro */ }

    { /* Trending section */ }
    <div className='superhero'>
      <Superhero />
    </div>
    { /* end of trending */ }

    { /* Trending section */ }
    <div className='trending'>
      <Trending />
    </div>
    { /* end of trending */ }
    </div>

  );
}

export default App;
