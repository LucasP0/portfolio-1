import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Banner />
      </>
    </div>
  );
}

export default App;
