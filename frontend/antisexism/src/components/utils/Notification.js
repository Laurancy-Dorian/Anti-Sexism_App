import React, {Component} from "react"

import PropTypes from 'prop-types'

/**
 * A Notification component
 */
class Notification extends Component {
    render() {
        const typesAllowedValues = [ "primary", "secondary", "success", "danger", "warning", "info", "light", "dark" ]

        const type = typesAllowedValues.includes(this.props.type) ? this.props.type : typesAllowedValues[0]
        
        return (
            <div className={"notification mx-auto m-2 w-75 alert alert-" + type}>
                {this.props.content}
            </div>
        )
    }
}

Notification.propTypes = {
    /** The content of the Notification */
    content : PropTypes.string,

    /**
     * The type of Notification. 
     * AllowedValues = [ "primary", "secondary", "success", "danger", "warning", "info", "light", "dark" ]
     */
    type: PropTypes.string
}

Notification.defaultProps = {
    content: "",
    type:"primary"
}

export default Notification