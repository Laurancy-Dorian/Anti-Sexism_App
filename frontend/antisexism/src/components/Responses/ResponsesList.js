import React, {Component} from 'react'
import Response from './Response'
import PropTypes from 'prop-types'

class ResponsesList extends Component {

    render() { 

        const responses = this.props.responses.map(response => {
            const type = this.props.responseTypeList.find(t => t.id_response_type === response.id_response_type)

            return (
                <Response key={"response-" + response.id_response} data={response} type={type} />
            )
        })

        return ( 
            <div className="responses responses-list container">
                {responses}
            </div>
         );
    }
}


ResponsesList.propTypes = {

    /** 
     * The Array containing the list of Responses
     *      responses.id_response              The id of the Response
     *      responses.description_response     The content of the Response
     *      responses.nb_likes_response        The number of users that liked this Response
     *      responses.nb_dislikes_response     The number of users that disliked this Response
     *      responses.date_remsponse           The date this response has been posted
     *      responses.pseudo_user              The pseudo of the user who posted this response, null if anonymous
     *      responses.id_responses_type        The id of the type of this response
     */
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            id_response: PropTypes.number,
            description_response: PropTypes.string,
            nb_likes_response: PropTypes.number,
            nb_dislikes_response: PropTypes.number,
            date_remsponse: PropTypes.string,
            pseudo_user: PropTypes.string,
            id_responses_type: PropTypes.number
        })
    ),

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

 
export default ResponsesList;