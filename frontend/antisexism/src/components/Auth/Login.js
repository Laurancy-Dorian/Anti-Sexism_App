import React, {Component} from 'react'
import config from "../../config/config"

import {
    Link
} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        if (this.state.username !== "" && this.state.password !== "") {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("pseudo_user", this.state.username);
            urlencoded.append("password_user", this.state.password);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(config.api + "/auth", requestOptions)
            .then(response => {
                if (response.status === 400) throw Error ("Nom d'utilisateur et/ou Mot de passe invalides")
                
                return response.json()
            })
            .then(result => {
                localStorage.setItem('auth', JSON.stringify(result));
                               
            })
            .catch(error => {
                console.log(error)
                
            });

            
        } else {
            console.log("Compléter champs pls")
        }
        
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        });
    }

    render () {
        return (
            <div className="container login">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Connexion</h3>
                        </div>

                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="username" 
                                        name="username"
                                        value={this.state.username} 
                                        onChange={this.handleChange}>
                                    </input>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}>
                                    </input>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn"></input>
                                </div>
                                
                            </form>
                        </div>
                       
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Vous n'avez pas de compte ? <Link to="/register">Inscrivez-vous</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login