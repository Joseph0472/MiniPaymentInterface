import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeScreen from './views/HomeScreen';
import MenuScreen from './views/MenuScreen';


function App() {
  // Basic route
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/menu" component={MenuScreen} />
          <Route component={()=>'404'} />
        </Switch>
      </div>
    </Router>
  );
  
}


export default App;
