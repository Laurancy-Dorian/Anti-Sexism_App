import React, {Component} from 'react'
import config from "../../config/config"
import PropTypes from 'prop-types'


/**
 * Form for adding a new Remark
 */
class AddReponse extends Component {

    static propTypes = {
        
    }

    constructor(props) {
        super(props);
        this.state = { 
            responseType: "",
            description: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        if (this.state.responseType !== "" && this.state.description !== "") {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
            var urlencoded = new URLSearchParams();
            urlencoded.append("description_response", this.state.description);
            urlencoded.append("id_response_type", this.state.responseType);
    
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };
    
            fetch(config.api + "/remarks/" + this.props.idRemark + "/responses", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ 
                    context: "",
                    description: ""
                })
                
                this.props.afterSubmit("Votre réponse a bien été envoyée", "success")
            })
            .catch(error =>  {
                //console.log('error', error)
                console.log(error.text)
            });
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
            <div className="add-response container d-flex justify-content-center row">
                <h2>Ajouter une Réponse</h2>
                <br />
                <form className="add-response-form d-flex justify-content-center row col-12" onSubmit={this.handleSubmit}>
                    <div className="form-group col-5" >
                        <select className="form-control" name="responseType" value={this.state.responseType} onChange={this.handleChange}>
                            <option value=''>--- Choisissez un Type de Réponse ---</option>
                            <option value='1'>Humour</option>
                            <option value='2'>Tristesse</option>
                        </select>
                        <br />
                        <label htmlFor="textarearesponse" className="">
                            Entrez la Response :
                        </label>
                        <textarea id="textarearesponse" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                        
                        <br />
                        <input className="form-control" type="submit" value="Envoyer" />
                    </div>

                </form>
            </div>
        )
    }
}

AddReponse.propTypes = {
    /** 
     * Function to execute after sending the form has been submitted
     * @param message the message to print in the ui
     * @param notificationType the type of notification
     */
    afterSubmit: PropTypes.func,
    /** The id of the Remark */
    idRemark: PropTypes.number
}
export default AddReponse;