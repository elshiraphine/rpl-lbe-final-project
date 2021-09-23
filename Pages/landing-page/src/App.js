import './App.css';
import Navbar from './component/Navbar';
import Card from './component/Card';
import Cardcontainer from './component/Cardcontainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cardcontainer />
    </div>
  );
}

export default App;
