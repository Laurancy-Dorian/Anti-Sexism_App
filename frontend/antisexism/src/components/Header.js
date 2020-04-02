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
    return(
          <Container>
            <Navbar bg="dark" variant="dark" sticky="top">
              <Link to="/">
              <Navbar.Brand >
                <img
                  src="/logo2.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              </Link>
              <Form inline>
                <FormControl onChange= { this.handleChange } value={ this.state.recherche } name="recherche" type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={ this.handleClick } variant="outline-info">Search</Button>
              </Form>
              <Nav className="justify-content-end" onSelect={this.handleSelect}>
                <NavDropdown title="CATEGORIE">
                  {items}
                </NavDropdown>
              </Nav>
              <Nav>
                <Button variant="outline-info">Connexion</Button>{' '}
                <Button variant="link">S'inscrire</Button>
              </Nav>
            </Navbar>    
          </Container>      
    )
    
  }

}




export default Header;