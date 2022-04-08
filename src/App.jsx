import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import {Switch, Route} from "react-router-dom"
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/">
           <Header />
        </Route>
        <Route path="/about">
           <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
