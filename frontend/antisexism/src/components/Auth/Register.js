import React, {Component} from 'react'
import config from "../../config/config"

import {
    Link,
    Redirect
} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            username: "",
            password: "",
            repeatpassword : ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        try {
        
            // Check if all fields are filled
            for (const field of Object.keys(this.state)) {
               if (this.state[field].length === 0) throw Error("Veuillez compléter tous les champs")
            }

            // Check if the two passwords are the same
            if (this.state.password !== this.state.repeatpassword) {
                throw Error('Les deux mots de passes ne correspondent pas')  
            }

            // Request
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

            let status = null
            fetch(config.api + "/users", requestOptions)
            .then(response => {
                status = response.status                
                return response.json()
            })
            .then(result => {

                if (status === 409) throw Error("Ce nom d'utilisateur est déjà utilisé")
                if (status === 400) throw Error(result.errors[0].message.split(" - ")[1])
                if (status !== 201) throw Error("Une erreur s'est produite, veuillez réessayer")


                // fetch the token
                fetch(config.api + "/auth", requestOptions)
                .then(response => {                   
                    return response.json()
                })
                .then(result => {
                    window.localStorage.setItem('auth', JSON.stringify(result));
                    this.props.notificationHandler('Bienvenue ' + result.user.pseudo_user, "success")               
                })
                
                            
            })
            .catch(error => {
                this.props.notificationHandler(error.message, "danger")               
            });
    

        } catch (error) {
            this.props.notificationHandler(error.message, "warning")  
        }
        
        
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        });
    }

    render () {
        if (localStorage.getItem("auth")) {
            return <Redirect to={{ pathname: "/"}} />
        } 

        return (
            <div className="container login">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Inscription</h3>
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
                                        placeholder="Nom d'utilisateur" 
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
                                        placeholder="Mot de passe"
                                        name="password"
                                        value={this.state.password}
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
                                        placeholder="Répéter le Mot de passe"
                                        name="repeatpassword"
                                        value={this.state.repeatpassword}
                                        onChange={this.handleChange}>
                                    </input>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Envoyer" className="btn float-right login_btn"></input>
                                </div>
                                
                            </form>
                        </div>
                       
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login