
import './App.scss';
import Nav from './components/Navigation/Nav';
import Footer from './components/Navigation/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login/Login';
import Home  from './views/Home/Home';
import About  from './views/About/About';
import Chungchi from './views/Chungchi/Chungchi';
import Chinhsachbaomat from './views/Chinhsachbaomat/Chinhsachbaomat';
import NoiquyWebsite from './views/NoiquyWebsite/NoiquyWebsite';
import Lienhe from './views/Lienhe/Lienhe';
import Canho from './views/Canho/Canho';
import Dichvu from './views/Dichvu/Dichvu';

function App() {
  return (
    <Router>
   <div className='app-container'>
        <Switch>
            {/* <Nav/> */}

              <Route path="/Home">
              <Nav/><Home/><Footer/>
              </Route>
              <Route path="/chung-chi">
              <Nav/><Chungchi/><Footer/>
              </Route>
              <Route path="/chinh-sach-bao-mat">
              <Nav/><Chinhsachbaomat/><Footer/>
              </Route>
              <Route path="/noi-quy-website">
              <Nav/><NoiquyWebsite/><Footer/>
              </Route>
              <Route path="/about">
              <Nav/><About/><Footer/>
              </Route>
              <Route path="/lien-he">
              <Nav/><Lienhe/><Footer/>
              </Route>
              <Route path="/dich-vu">
              <Nav/><Dichvu/><Footer/>
              </Route>
              <Route path="/can-ho">
              <Nav/><Canho/><Footer/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/" exact>
              <Nav/> <Home/>
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
