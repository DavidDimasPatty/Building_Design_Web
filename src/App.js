import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import  Galery  from './components/galery';
import  Pricing  from './components/pricing';
import Header from './components/template';
import  About  from './components/about';
import  Employee  from './components/employee';
import  Contact  from './components/contact';
import  SignUp  from './components/signup';
import  Login  from './components/login';
import Order from './components/order';
import FormOrder from './components/form_order';
import Feed from './components/feed';
function App() {
  
  
  return (
    
    <Router>
      
      <Switch>
        
        <Route exact path="/">
          <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <Home/>
        </Route>
        
        <Route exact path="/galery">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <Galery/>
        </Route>

        <Route exact path="/pricing">
          <Pricing/>
        </Route>

        <Route exact path="/about">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <About/>
        </Route>

        <Route exact path="/employee">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <Employee/>
        </Route>

        <Route exact path="/contact">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <Contact/>
        </Route>

        <Route exact path="/order">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <Order/>
        </Route>

        <Route exact path="/order/1">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <FormOrder/>
        </Route>
        
        <Route exact path="/feed">
        <div style={{position:"sticky",top:"0"}}>
          <Header/>
          </div>
          <Feed/>
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