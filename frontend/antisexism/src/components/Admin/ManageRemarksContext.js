import React, { Component } from 'react'
import config from "../../config/config"
import RemarkContextLine from "./RemarkContextLine"

class ManageRemarksContext extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contextList: []
        }
    }
    componentDidMount = () => {
        this.fetchAllContexts()
    }

    fetchAllContexts = () => {
        fetch(config.api + "/remarks_contexts")
            .then(response => response.json())
            .then(result => {
                this.setState(function (state) {
                    return {
                        contextList: result,
                        name: "",
                        color: ""
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
        urlencoded.append("name_context", this.state.name);
        urlencoded.append("color_context", this.state.color);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(config.api + "/remarks_contexts/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.fetchAllContexts()
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const contexts = this.state.contextList.map(c => {
            return (
                <RemarkContextLine key={c.id_context} data={c} />
            )
        })

        return (
            <div>
                <div className="container" >
                    <div className="row table-dark">
                        <div className="col-12 ">
                            <div className="row tableline tableline-header">
                                <div className="col-2 tablecell">
                                    Id Catégorie
                                </div>
                                <div className="col-4 tablecell">
                                    Nom
                                </div>
                                <div className="col-3 tablecell">
                                    Couleur
                                </div>
                                <div className="col-3 tablecell">
                                    Action
                                </div>
                            </div>
                            {contexts}
                        </div>
                    </div>

                    <div className="add-remark container d-flex justify-content-center form-row">
                        <div className="d-flex justify-content-start w-100 header">Ajouter une Catégorie</div>
                        <form className="add-remark-form d-flex justify-content-center row col-12" onSubmit={this.handleSubmit}>
                            <div className="form-row align-items-top col-12 d-flex justify-content-center ">

                                <label className="col-sm-12 col-md-4 mx-0">
                                    Nom de la catégorie : <br />
                                    <input onChange={this.handleChange} value={this.state.name} name={"name"}></input>
                                </label>

                                <label className="col-sm-12 col-md-6 px-0 mx-0" style={{ background: this.state.color }}>
                                    Couleur de la catégorie : <br />
                                    <input onChange={this.handleChange} value={this.state.color} name={"color"}></input>
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

export default ManageRemarksContext