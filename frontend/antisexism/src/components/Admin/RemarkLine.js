import React, { Component } from 'react'
import config from "../../config/config"
import { Link } from 'react-router-dom';

class RemarkLine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            color: ""
        }
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
        

    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        var myHeaders = new Headers();

        const auth = JSON.parse(localStorage.getItem("auth"))
        myHeaders.append("Authorization", "Bearer " + auth.token);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(config.api + "/remarks/" + this.props.data.id_remark, requestOptions)
            .then(response =>  {
                if (response.status !== 200) throw Error("Une erreur s'est produite")
                console.log(this.props.data.id_remark + " Supprimée")
                this.props.onDelete()
            })
            .catch(error => console.log('error', error));
    }


    render() {
        return (

            <div className="col-12 col-12 tableline">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-1 tablecell">
                            <Link to={"/remarks/" + this.props.data.id_remark}>
                                {this.props.data.id_remark}
                            </Link>
                        </div>
                        <div className="col-7 tablecell">
                            {this.props.data.description_remark}
                        </div>
                        <div className="col-2 tablecell">
                            {this.props.data.pseudo_user}
                        </div>
                        <div className="col-2 tablecell">
                            <button className="btn btn-danger m-1">Supprimer</button>
                        </div>
                    </div>
                </form>
            </div>
        )
        

    }
}

export default RemarkLine