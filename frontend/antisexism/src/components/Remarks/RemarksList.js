import React, {Component} from 'react'
import Remark from './Remark'
import PropTypes from 'prop-types'

/**
 * A list of Remarks
 */
class RemarksList extends Component {
    render() { 
        const remarks = this.props.remarks.map(remark => {
            return (
                <Remark key={remark.id_remark} data={remark} />
            )
        })

        return ( 
            <div className="remarks remarks-list container">
                {remarks}
            </div>
         );
    }
}

RemarksList.propTypes = {

    /** 
     * The Array containing the list of remarks
     *      remarks.id_remark              The id of the Remark
     *      remarks.description_remark     The content of the remark
     *      remarks.nb_seen_remark         The number of users that declared they have seen a situation like this one
     *      remarks.nb_suffered_remark     The number of users that declared they have suffered a situation like this one
     *      remarks.date_remark            The date this remark has been posted
     *      remarks.pseudo_user            The pseudo of the user who posted this remark, null if anonymous
     *      remarks.id_context             The id of the context of this remark
     */
    remarks: PropTypes.arrayOf(
        PropTypes.shape({
            id_remark: PropTypes.number,
            description_remark: PropTypes.string,
            nb_seen_remark: PropTypes.number,
            nb_suffered_remark: PropTypes.number,
            date_remark: PropTypes.string,
            pseudo_user: PropTypes.string,
            id_context: PropTypes.number
        })
    )
}


export default RemarksList;