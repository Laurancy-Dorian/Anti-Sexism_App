import React from 'react';
import RemarksList from './components/Remarks/RemarksList'
import RemarkPage from './composers/RemarkPage'
import AddRemark from './components/Remarks/AddRemark'

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/remark/:id">
            <RemarkPageRoute />
          </Route>
        </Switch>
      </Router>

    </div>    
  );
}

function Home() {
  return (
    <div>
      <AddRemark />
      <RemarksList />
    </div>

  )
}

function RemarkPageRoute() {
  let { id } = useParams()

  return (<RemarkPage idRemark={id} />)
}


export default App;
