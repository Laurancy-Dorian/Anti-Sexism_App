import React, { Component } from 'react'
import config from "../../config/config"
import ResponseTypeLine from "./ResponseTypeLine"

class ManageResponseTypes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            responseTypesList: [],
            name : "",
            emoji: ""
        }
    }
    componentDidMount = () => {
        this.fetchAllResponseTypes()
    }

    fetchAllResponseTypes = () => {
        fetch(config.api + "/responses_types")
            .then(response => response.json())
            .then(result => {
                this.setState(function (state) {
                    return {
                        responseTypesList: result
                       
                    };
                });
            })
            .catch(error => console.log('error', error));
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var myHeaders = new Headers();

        const auth = JSON.parse(localStorage.getItem("auth"))
        myHeaders.append("Authorization", "Bearer " + auth.token);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


        var urlencoded = new URLSearchParams();
        urlencoded.append("name_response_type", this.state.name);
        urlencoded.append("emoji_response_type", this.state.emoji);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(config.api + "/responses_types/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.fetchAllContexts()
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const contexts = this.state.responseTypesList.map(t => {
            return (
                <ResponseTypeLine key={t.id_response_type} data={t} />
            )
        })

        return (
            <div>
                <div className="container" >
                    <div className="row table-dark">
                        <div className="col-12 ">
                            <div className="row tableline tableline-header">
                                <div className="col-2 tablecell">
                                    Id Type
                                </div>
                                <div className="col-4 tablecell">
                                    Nom
                                </div>
                                <div className="col-3 tablecell">
                                    Emoji
                                </div>
                                <div className="col-3 tablecell">
                                    Action
                                </div>
                            </div>
                            {contexts}
                        </div>
                    </div>

                    <div className="add-remark container d-flex justify-content-center form-row">
                        <div className="d-flex justify-content-start w-100 header">Ajouter un Type de Réponse</div>
                        <form className="add-remark-form d-flex justify-content-center row col-12" onSubmit={this.handleSubmit}>
                            <div className="form-row align-items-top col-12 d-flex justify-content-center ">

                                <label className="col-sm-12 col-md-4 mx-0">
                                    Nom du type : <br/>
                                <input onChange={this.handleChange} value={this.state.name} name={"name"}></input>
                                </label>

                                <label className="col-sm-12 col-md-6 px-0 mx-0">
                                    Emoji associé : <br/>
                                <input onChange={this.handleChange} value={this.state.emoji} name={"emoji"}></input>
                                {this.state.emoji ? String.fromCodePoint(this.state.emoji) : ""}
                                </label>
                                <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                                    <input className="form-control" type="submit" value="Envoyer" />
                                </div>

                            </div>

                        </form>
                    </div>
</div>

                </div>



        )
    }
}

export default ManageResponseTypes