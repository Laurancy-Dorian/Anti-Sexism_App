import React, {Component} from 'react'
import PropTypes from 'prop-types'

/**
 * Component representing a Response to a Remark
 */
class Response extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            like : false,
            dislike : false
        }
    }

    componentDidMount = () => {
    }

    handleClickLike = () => {
        console.log("Like")
    }

    handleClickDislike = () => {
        console.log("Dislike")
    }


    render() { 

        let date = new Date(this.props.data.date_response)
        date = (date.getDate()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + "/" + (1+date.getMonth()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + "/" + date.getFullYear() 
                + " à "
                + (date.getHours()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + ":" 
                + date.getMinutes().toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false})

        let typeName = ""
        let typeEmoji = ""
        if (this.props.type) {
            typeName = this.props.type.name_response_type 
            typeEmoji = this.props.type.emoji_response_type 
        }
        

        return ( 
            <div id={"response-" + this.props.data.id_response} className="response container">
                <div className="header-response row">
                    <div className="response-user col-4">Par { this.props.data.pseudo_user ? this.props.data.pseudo_user : "Anonyme" }</div>
                    <div className="remark-context col-4 text-center">
                        <span className="mr-2 ml-2 response-type-name"> { typeName } </span>
                        <span className="mr-2 ml-2 response-type-emoji"> { typeEmoji } </span>
                    </div>
                    <div className="response-date col-4 text-right">Le { date } </div>
                </div>
                <div className="content-response">
                    <div className="description-response">
                        { this.props.data.description_response }
                    </div>
                    <div className="remark-buttons container row justify-content-center">
                        <div onClick={this.handleClickLike} className="btn btn-group remark-button remark-button-seen row col-12 col-lg-3 ml-md-5 mr-md-5">
                            <button className="btn btn-primary col-10">Pertinent</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_likes_response } </div>
                        </div>
                        
                        <div onClick={this.handleClickDislike} className="btn btn-group remark-button remark-button remark-button-suffered col-12 col-lg-3 row col ml-md-5 mr-md-5">
                        <button className="btn btn-primary col-10">Non Pertinent</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_dislikes_response } </div>
                            
                        </div>
                        
                    </div>                  
                </div>
            </div>
         );
    }
}


Response.propTypes = {

    /** 
     * The object containing the data of the response
     *      data.id_response              The id of the Response
     *      data.description_response     The content of the Response
     *      data.nb_likes_response        The number of users that liked this Response
     *      data.nb_dislikes_response     The number of users that disliked this Response
     *      data.date_remsponse           The date this response has been posted
     *      data.pseudo_user              The pseudo of the user who posted this response, null if anonymous
     *      data.id_responses_type        The id of the type of this response
     */

    data: PropTypes.shape({
        id_response: PropTypes.number,
        description_response: PropTypes.string,
        nb_likes_response: PropTypes.number,
        nb_dislikes_response: PropTypes.number,
        date_remsponse: PropTypes.string,
        pseudo_user: PropTypes.string,
        id_responses_type: PropTypes.number
    }),

    type: PropTypes.shape({
        id_response_type: PropTypes.number,
        name_response_type: PropTypes.string,
        emoji_response_type: PropTypes.string
    })
}
 
export default Response;