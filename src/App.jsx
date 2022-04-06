import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/">
           <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
