import React, {Component} from 'react'
import Response from './Response'
import PropTypes from 'prop-types'

class ResponsesList extends Component {

    render() { 

        const responses = this.props.responses.map(response => {
            return (
                <Response key={"response-" + response.id_response} data={response} />
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
    )
}

 
export default ResponsesList;