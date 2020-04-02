import React, {Component} from 'react'
import { Link } from "react-router-dom"
import config from "../config/config"
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap'



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

  handleHomeReturn = () => {
    if (this.props.handleHomeReturn) {
      this.props.handleHomeReturn()
    }
    
  }

  render(){
    const items = this.state.contextList.map (context => {
      return(  <NavDropdown.Item key={ context.id_context } eventKey= { context.id_context } style={ {color: context.color_context} } >{ context.name_context }</NavDropdown.Item>)
    })

    let user

    if (window.localStorage.getItem("auth")) {
      const userdata = JSON.parse(window.localStorage.getItem("auth")).user
      user = (
        <div>
          <span className="mr-2">{"Bienvenue " + userdata.pseudo_user[0].toUpperCase() + userdata.pseudo_user.substring(1)}</span> 

          {
              (userdata.is_admin_user) ? 
                <Link className="mr-2 btn btn-dark" to="/admin">
                  Panneau d'administration
                </Link>
              :
              ""
              }

          <Link to="/logout" className="btn btn-dark">
            Déconnexion
          </Link>
        </div>
      
      )
    } else {
      user = (
        <Link className="btn btn-dark" to="/login">
          Connexion
        </Link>
      )
    }
    return(
      <div className="header-app">
          <Navbar  className="d-flex justify-content-between" sticky="top">
              <Nav>
                <Link to="/">
                  <Navbar.Brand onClick={this.handleHomeReturn}>
                    <img
                      src="/logo2.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Navbar.Brand>
                </Link>
              </Nav>
              
                {
                  !this.props.admin ?
                    <Nav>
                      <Form inline>
                        <FormControl onChange= { this.handleChange } value={ this.state.recherche } name="recherche" type="text" placeholder="Search" className="mr-sm-2" />
                        <div onClick={ this.handleClick }  className="btn btn-dark">Rechercher</div>
                      </Form>
                      <Nav className="d-flex justify-content-center" onSelect={this.handleSelect}>
                          <NavDropdown title="CATEGORIE">
                            {items}
                          </NavDropdown>
                      </Nav>
                    </Nav>
                  :
                    ""
                }
                  
              
              <div className="actions-header">
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