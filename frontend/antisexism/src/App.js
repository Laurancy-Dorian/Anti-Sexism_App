import React, {Component} from 'react';

import HomePage from './containers/HomePage'
import RemarkPage from './containers/RemarkPage'
import Header from './components/Header'
import Login from './components/Auth/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

/**
 * App
 */
class App extends Component {

  constructor(){
    super();
    this.state = { 
      context: ""
    }
  }
  
  filterContext = (value) => {
    this.setState(() => {
      return ({ context: value });
    });
    console.log(value)
  }

  render(){
  return (
    
    <div className="App container">
      <Router>

        <Header handleContext={this.filterContext}/>

        <Switch>
          <Route exact path="/"> 
            <HomePage context={this.state.context}/>
          </Route>

          <Route path="/remarks/:id">
            <RemarkPageRoute />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
        
        <h1>Footer</h1>

      </Router>  
    </div>  
    
  );
  }
}

function RemarkPageRoute() {
  let { id } = useParams()
  return (<RemarkPage idRemark={id} />)
}


export default App;
