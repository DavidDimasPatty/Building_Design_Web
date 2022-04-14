import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import  Galery  from './components/galery';
import  Pricing  from './components/pricing';
import  About  from './components/about';
import  Employee  from './components/employee';
import  Contact  from './components/contact';
import  SignUp  from './components/signup';
import  Login  from './components/login';
function App() {
  
  
  return (
    
    <Router>
      
      <Switch>
        
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/galery">
          <Galery/>
        </Route>
        <Route exact path="/pricing">
          <Pricing/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/employee">
          <Employee/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>

      </Switch>
      
    </Router>
    
  );
}

export default App;