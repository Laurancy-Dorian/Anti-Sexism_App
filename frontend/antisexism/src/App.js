import React, { Component } from 'react';

import HomePage from './containers/HomePage'
import RemarkPage from './containers/RemarkPage'
import Header from './components/Header'
import Login from './components/Auth/Login'
import Notification from './components/utils/Notification'
import Register from './components/Auth/Register'
import AdminPanel from './components/Admin/AdminPanel'
import ManageRemarksContext from "./components/Admin/ManageRemarksContext"
import ManageRemarks from "./components/Admin/ManageRemarks"
import ManageResponseTypes from "./components/Admin/ManageResponseTypes"

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

  constructor() {
    super();
    this.state = {
      context: "",
      notification: "",
      notificationType: "",
      recherche: ""
    }
  }

  updateNotification = (message, notificationType) => {
    this.setState({
      notification: message,
      notificationType: notificationType
    })
  }

  filterContext = (value) => {
    this.setState(() => {
      return ({ context: value });
    });
  }

  handleHomeReturn = () => {
    this.setState(() => {
      return ({
        recherche: "",
        context: ""
      });
    });
  }

  handleSearch = (value) => {
    this.setState(() => {
      return ({ recherche: value });
    });
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>

            <Route path="/admin">
              <Header admin={true} />

              <div className="container">
                <AdminPage />
              </div>
            </Route>

            <Route path="/">

              <Header handleContext={this.filterContext} handleSearch={this.handleSearch} handleHomeReturn={this.handleHomeReturn}/>
              <div className="container">
                {this.state.notification.length > 0 ? <Notification type={this.state.notificationType} content={this.state.notification} /> : ""}

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
                  <LogoutPage notificationHandler={this.updateNotification} />
                </Route>

                <Route exact path="/">
                  <HomePage notificationHandler={this.updateNotification} context={this.state.context} content={this.state.recherche} />
                </Route>

              </div>
            </Route>

          </Switch>
        </Router>
      </div>

    );
  }




}

function RemarkPageRoute() {
  let { id } = useParams()
  return (<RemarkPage idRemark={id} />)
}

function LogoutPage(props) {
  localStorage.removeItem("auth")
  props.notificationHandler("Vous vous êtes bien déconnecté", "success")
  return <Redirect to={{ pathname: "/" }} />
}

function AdminPage() {
  if (localStorage.getItem("auth")) {
    if (JSON.parse(localStorage.getItem("auth")).user.is_admin_user) {
      return (
        <div className="admin">
          <Route path="/admin/remarkcontext">
            <ManageRemarksContext />
          </Route>
          <Route path="/admin/responsestypes">
            <ManageResponseTypes />
          </Route>
          <Route path="/admin/remarks">
           <ManageRemarks/>
          </Route>
          <Route exact path="/admin">
            <AdminPanel />
          </Route>
        </div>

      )
    }
  }
  return <Redirect to={{ pathname: "/" }} />

}


export default App;
