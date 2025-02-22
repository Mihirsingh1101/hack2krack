import logo from './logo.svg';
import Landingpage from './pages/landingpage'
import './App.css';
import Imagecapsule from './pages/imagecapsule';
import Profile from './pages/profile'

function App() {
  return (
    <div className="App">
    <Imagecapsule/>
    <Landingpage/>
    <Profile/>
    </div>
  );
}

export default App;
