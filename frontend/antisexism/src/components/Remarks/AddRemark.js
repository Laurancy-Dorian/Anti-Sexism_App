import React, { Component } from 'react'
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
        if (this.state.context !== "" && this.state.description !== "") {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            // Get the token if exists
            if (localStorage.getItem("auth")) {
                myHeaders.append("Authorization", "Bearer " + JSON.parse(localStorage.getItem("auth")).token);
            }

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
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }



    render() {
        const options = this.props.contextList.map(context => {
            return (<option key={context.id_context} style={{ color: context.color_context, background:"#FFF" }} value={context.id_context} > {context.name_context} </option>)
        })
        return (
            <div className="add-remark container d-flex justify-content-center form-row">
                <div className="d-flex justify-content-start w-100 header">Ajouter une remarque</div>
                <form className="add-remark-form d-flex justify-content-center row col-12" onSubmit={this.handleSubmit}>
                    <div className="form-row align-items-top col-12 d-flex justify-content-center ">
                    
                        <div className="col-sm-12 col-md-4 mx-0">
                            <select className="form-control" name="context" value={this.state.context} onChange={this.handleChange}>
                                <option value=''>--- Choisissez un contexte ---</option>
                                {options}
                            </select>
                        </div>

                        <div className="col-sm-12 col-md-6 px-0 mx-0">
                            <textarea placeholder="Entrez la remarque" id="textarearemark" className="form-control" name="description" value={this.state.description} onChange={this.handleChange} /> 

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

AddRemark.propTypes = {
    /** 
     * Function to execute after sending the form has been submitted
     * @param message the message to print in the ui
     * @param notificationType the type of notification
     */
    afterSubmit: PropTypes.func,

    /**
     * All the Remark contexts
     *      contextList.id_context	    number  The id of the context
     *      contextList.name_context	String	The name
     *      contextList.color_context	String  The color associated (hex)
     */
    contextList: PropTypes.arrayOf(PropTypes.shape({
        id_context: PropTypes.number,
        name_context: PropTypes.string,
        color_context: PropTypes.string
    }))
}
export default AddRemark;