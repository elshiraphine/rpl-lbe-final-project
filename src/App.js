import './App.css';
import {Route} from "react-router-dom";
import Home from './Home';
import Alert from './Alert';
import Learn from './Learn';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/alert" component={Alert}/>
      <Route exact path="/learn" component={Learn}/>
    </div>
  );
}

export default App;

