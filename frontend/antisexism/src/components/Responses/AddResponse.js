import React, {Component} from 'react'
import config from "../../config/config"
import PropTypes from 'prop-types'


/**
 * Form for adding a new Remark
 */
class AddReponse extends Component {

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
    
            
            // Get the token if exists
            if (localStorage.getItem("auth")) {
                myHeaders.append("Authorization", "Bearer " + JSON.parse(localStorage.getItem("auth")).token);
            }
            
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
                console.log(error)
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

        const options = this.props.responseTypeList.map (type => {
            return( <option key={ type.id_response_type } value= { type.id_response_type } > { type.name_response_type } </option> )
        })

        return (
            <div className="add-remark add-response container d-flex justify-content-center form-row">
                <div className="d-flex justify-content-start w-100 header">Ajouter une réponse</div>
                <form className="add-remark-form d-flex justify-content-center row col-12" onSubmit={this.handleSubmit}>
                    <div className="form-row align-items-top col-12 d-flex justify-content-center ">    
                            <div className="col-sm-12 col-md-4 mx-0">
                                <select className="form-control" name="responseType" value={this.state.responseType} onChange={this.handleChange}>
                                    <option value=''>--- Choisissez un Type de Réponse ---</option>
                                    
                                    { options }

                                </select>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 px-0 mx-0">

                                <textarea id="textarearesponse" placeholder="Entrez la réponse que vous proposez" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                                <input className="form-control" type="submit" value="Envoyer" />

                            </div>
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
    idRemark: PropTypes.number,

    /**
     * ResponseTypeList 	object[]	An array containing the Responses Types
     *      ResponseTypeList.id_response_type	    number  The id
     *      ResponseTypeList.name_response_type	    String	The name
     *      ResponseTypeList.emoji_response_type	String	The emoji associated
     */
    responseTypeList: PropTypes.arrayOf(PropTypes.shape({
        id_response_type: PropTypes.number,
        name_response_type: PropTypes.string,
        emoji_response_type: PropTypes.string
    }))
}
export default AddReponse;