import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from './components/Menu';
import routes from './components/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Menu/>
          <Switch>
            {this.showRoutes()}
          </Switch>
          
        </div>
      </Router>
    );
  }
  showRoutes(){
    return (routes.map((route, index) =>(
      <Route path={route.path} exact={route.exact} component={route.main} key={index}/>
    )))
  }
}

export default App;
