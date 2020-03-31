import React from 'react';

import HomePage from './containers/HomePage'
import RemarkPage from './containers/RemarkPage'
import Header from './components/Header'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    
    <div className="App container">
      <Router>

        <Link to="/">
          <Header/>
        </Link>

        <Switch>
          <Route exact path="/"> 
            <HomePage />
          </Route>
          <Route path="/remarks/:id">
            <RemarkPageRoute />
          </Route>
        </Switch>
        
        <h1>Footer</h1>

      </Router>  
    </div>  
    
  );
}

function RemarkPageRoute() {
  let { id } = useParams()
  return (<RemarkPage idRemark={id} />)
}


export default App;
