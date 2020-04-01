import React, {Component} from 'react';

import HomePage from './containers/HomePage'
import RemarkPage from './containers/RemarkPage'
import Header from './components/Header'
import Login from './components/Auth/Login'
import Notification from './components/utils/Notification'
import Register from './components/Auth/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";

/**
 * App
 */
class App extends Component {

  constructor(){
    super();
    this.state = { 
      context: "",
      notification : "",
      notificationType : ""
    }
  }
  
  updateNotification = (message, notificationType) => {
    this.setState({
      notification: message,
      notificationType: notificationType
    })
    
  }

  render(){
    return (
      
      <div className="App container">
        <Router>

          <Header/>
          {this.state.notification.length > 0 ? <Notification type={this.state.notificationType} content={this.state.notification} /> : ""}
          
          <Switch>
            

            <Route path="/remarks/:id">
              <RemarkPageRoute />
            </Route>

            <Route path="/login">
              <Login notificationHandler={this.updateNotification} />
            </Route>

            <Route path="/register">
              <Register notificationHandler={this.updateNotification} />
            </Route>

            <Route path="/logout">
              <LogoutPage />
            </Route>

            <Route path="/"> 
              <HomePage notificationHandler={this.updateNotification} />
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

function LogoutPage() {
  console.log("oui")
  localStorage.removeItem("auth")
  return <Redirect to={{ pathname: "/"}} />
}


export default App;
