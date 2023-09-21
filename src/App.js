
import './App.scss';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login/Login';
import Home  from './views/partials/Home/Home';


function App() {
  return (
    <Router>
   <div className='app-container'>
        <Switch>
              <Route path="/Home">
              <Nav/>
                <Home/>
              
              </Route>
              <Route path="/contact">
              <Nav>home</Nav>
              </Route>
              <Route path="/about">
              <Nav>home</Nav>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/" exact>
              <Nav></Nav>
              </Route>
              <Route path="*">
              <Nav>home</Nav>
              </Route>
        </Switch>
   </div>
   </Router>
  );
}

export default App;
