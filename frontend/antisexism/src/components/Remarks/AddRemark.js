import React, {Component} from 'react'
import config from "../../config/config"
import PropTypes from 'prop-types'


/**
 * Form for adding a new Remark
 */
class AddRemark extends Component {

    static propTypes = {
        
    }

    constructor(props) {
        super(props);
        this.state = { 
            context: "",
            description: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.context !== "" && this.state.context !== "") {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("description_remark", this.state.description);
            urlencoded.append("id_context", this.state.context);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(config.api + "/remarks", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ 
                    context: "",
                    description: ""
                })
                this.props.afterSubmit("Votre Remarque a bien été ajoutée", "success")
            })
            .catch(error => console.log('error', error));
        } else {
            this.props.afterSubmit("Veuillez renseigner tous les champs", "danger")
        }

        
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        });
    }



    render() { 
        return (
            <div className="add-remark container d-flex justify-content-center row">
                <h2>Ajouter une remarque</h2>
                <br />
                <form className="add-remark-form d-flex justify-content-center row col-12" onSubmit={this.handleSubmit}>
                    <div className="form-group col-5" >
                        <select className="form-control" name="context" value={this.state.context} onChange={this.handleChange}>
                            <option value=''>--- Choisissez un contexte ---</option>
                            <option value='1'>Dans la Rue</option>
                            <option value='2'>Au Travail</option>
                            <option value='3'>Dans les transports</option>
                            <option value='4'>Au domicile</option>
                        </select>
                        <br />
                        <label htmlFor="textarearemark" className="">
                            Entrez la remarque :
                        </label>
                        <textarea id="textarearemark" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                        
                        <br />
                        <input className="form-control" type="submit" value="Envoyer" />
                    </div>

                </form>
            </div>
        )
    }
}

AddRemark.propTypes = {
    /** 
     * Function to execute after sending the form has been submitted
     * @param message the message to print in the ui
     * @param notificationType the type of notification
     */
    afterSubmit: PropTypes.func
}
export default AddRemark;