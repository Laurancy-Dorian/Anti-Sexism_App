import React, {Component} from 'react'
import { Link } from "react-router-dom"
import config from "../config/config"
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Container} from 'react-bootstrap'



/**
 * Header Component
 */
class Header extends Component {

  constructor(props){
    super(props);
    this.state = { 
      contextList: [],
      recherche: ""
    }
  }


  fetchAllContexts = () => {
    fetch(config.api + "/remarks_contexts")
    .then(response => response.json())
    .then(result =>  {
        this.setState(function(state) {
            return {
              contextList: result
            };
        });
    })
    .catch(error => console.log('error', error));
}


  componentDidMount = () => {
    this.fetchAllContexts()
  }

  
  handleSelect = (eventKey) => {
    this.props.handleContext(eventKey)
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
        [name] : value
    });
}

  handleClick = () => {
    this.props.handleSearch(this.state.recherche)
  }

  render(){
    const items = this.state.contextList.map (context => {
      return(  <NavDropdown.Item key={ context.id_context } eventKey= { context.id_context } style={ {color: context.color_context} } >{ context.name_context }</NavDropdown.Item>)
    })

    let user
    if (window.localStorage.getItem("auth")) {
      user = (
        <div>
          <span className="mr-2">{"Bienvenue " + JSON.parse(window.localStorage.getItem("auth")).user.pseudo_user}</span> 
          <Link to="logout">
            Déconnexion
          </Link>
        </div>
      
      )
    } else {
      user = (
        <Link to="login">
          Connexion
        </Link>
      )
    }


          <div className="header-app">
            <Navbar className="d-flex justify-content-between" sticky="top">
              
              <div>
                <Nav className="d-flex justify-content-end">
                  <div className="d-flex flex-row-reverse">
                    {user}
                  </div>
                    
                </Nav>
              </div>
              
            </Navbar>    
          </div>
            
    )
    
  }

}




export default Header;