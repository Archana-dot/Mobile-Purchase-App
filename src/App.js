
import './App.css';
import Mobile from './components/Mobile'
import PurchasedMobile from './components/PurchasedMobile'
import *as ReactBootstrap from 'react-bootstrap'
import { Button, ButtonToolbar, Form, Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    
   <Router>
      <div className="App">
        
        <div>
        <Navbar className="bg-dark navbar-expand-sm navbar navbar-light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/">Mobiles</Nav.Link>
            <Nav.Link href="/purchasedmobile">Purchased Mobiles</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
        <Switch>
          <Route exact path='/' component={Mobile} />
          <Route path='/purchasedmobile' component={PurchasedMobile} />
        </Switch>
      </div>
    </Router>
    
 );
}

export default App;
