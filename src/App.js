import logo from './logo.svg';
import Landingpage from './pages/landingpage'
import './App.css';
import Textcapsule from './pages/textcapsule';
import Profile from './pages/profile';
import Videocapsule from './pages/videocapsule';

function App() {
  return (
    <div className="App">
    <Textcapsule/>
    <Landingpage/>
    <Profile/>
    <Videocapsule/>
    </div>
  );
}

export default App;
