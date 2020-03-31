import {React, Component} from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Container} from 'react-bootstrap'



/**
 * Header Component
 */
class Header extends Component {

  constructor(props){
    super(props);
  }


  
  render(){

    return(
          <Container>
            <Navbar bg="dark" variant="dark" sticky="top">
              <Link to="/">
              <Navbar.Brand href="#home">
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
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
              <Nav className="justify-content-end">
                <NavDropdown title="CATEGORIE">
                  <NavDropdown.Item href="#action/3.1">{this.props.data.name_context}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Catégorie 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Catégorie 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown title="PARAMETRE" >
                  <NavDropdown.Item href="#action/3.1">Mon Compte</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Mes Remarques</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mes Réponses</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Déconnexion</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar>    
          </Container>      
    )
    
  }

}

Header.propTypes = {
  /**
 * All the Remark contexts
 *      contextList.id_context	    number  The id of the context
 *      contextList.name_context	String	The name
 *      contextList.color_context	String  The color associated (hex)
 */
data: PropTypes.shape({
  contextList: PropTypes.arrayOf(PropTypes.shape({
    id_context: PropTypes.number,
    name_context: PropTypes.string,
    color_context: PropTypes.string
  }))
})

}

export default Header;