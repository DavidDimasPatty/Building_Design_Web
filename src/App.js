import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import  Galery  from './components/galery';

import  Pricing  from './components/pricing';

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
      
      
      </Switch>
      
    </Router>
    
  );
}

export default App;