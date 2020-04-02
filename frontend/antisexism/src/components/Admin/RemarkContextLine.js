import React, { Component } from 'react'
import config from "../../config/config"

class RemarkContextLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            color: ""
        }

    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    componentDidMount = () => {
        this.setState({
            name: this.props.data.name_context,
            color: this.props.data.color_context
        })
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
            method: 'PATCH',
            headers: myHeaders,
             body: urlencoded,
             redirect: 'follow'
        };

        fetch(config.api + "/remarks_contexts/" + this.props.data.id_context, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    render() {
        return (

                <form onSubmit={this.handleSubmit}>
                    <div className="row tableline">
                        <div className="col-2 tablecell">
                            {this.props.data.id_context}
                        </div>
                        <div className="col-4 tablecell">
                            <input onChange={this.handleChange} value={this.state.name} name={"name"}></input>
                        </div>
                        <div className="col-3 tablecell" style={{ background: this.state.color }}>
                            <input onChange={this.handleChange} value={this.state.color} name={"color"}></input>
                        </div>
                        <div className="col-3 tablecell">
                            <button className="btn btn-light m-1">Modifier</button>
                        </div>
                    </div>
                </form>
        )
        

    }
}

export default RemarkContextLine