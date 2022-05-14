import './App.css';
import Caracter from './components/Caracter';
import banner from './assets/img/banner.svg'
// import banner2 from './assets/img/banner2.svg'

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <img className='main-pic' src={banner} alt="" />
        {/* <img className='logo' src={banner2} alt="" /> */}
      </header>
      <Caracter/>
    </div>
  );
}

export default App;
