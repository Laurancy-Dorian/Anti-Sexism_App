import React, { Component } from 'react'
import config from "../../config/config"

class ResponseTypeLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            emoji: ""
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
            name: this.props.data.name_response_type,
            emoji: this.props.data.emoji_response_type
        })
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
            method: 'PATCH',
            headers: myHeaders,
             body: urlencoded,
             redirect: 'follow'
        };

        fetch(config.api + "/responses_types/" + this.props.data.id_response_type, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    render() {
        let emoji = this.state.emoji
        try {
            emoji = String.fromCodePoint(emoji)
        } catch {}
        return (

                <form onSubmit={this.handleSubmit}>
                    <div className="row tableline">
                        <div className="col-2 tablecell">
                            {this.props.data.id_response_type}
                        </div>
                        <div className="col-4 tablecell">
                            <input onChange={this.handleChange} value={this.state.name} name={"name"}></input>
                        </div>
                        <div className="col-3 tablecell">
                            <input onChange={this.handleChange} value={this.state.emoji} name={"emoji"}></input>
                            {emoji}
                        </div>
                        <div className="col-3 tablecell">
                            <button className="btn btn-light m-1">Modifier</button>
                        </div>
                    </div>
                </form>
        )
        

    }
}

export default ResponseTypeLine