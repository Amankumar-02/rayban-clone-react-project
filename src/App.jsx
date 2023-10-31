import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Back from './components/Back/Back';


function App() {
  return (
    <>
      <div id="main">
        <div id="back">
        <Back/>
        </div>
        <div id="top">
          <div id='workingArea'>
          <Header />
          <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
