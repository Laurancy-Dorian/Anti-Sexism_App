import React, {Component} from "react"

import PropTypes from 'prop-types'

/**
 * A Notification component
 */
class Notification extends Component {
    render() {
        return (
            <div className="notification alert alert-success">
                {this.props.content}
            </div>
        )
    }
}

Notification.propTypes = {
    /** The content of the Notification */
    content : PropTypes.string
}

Notification.defaultProps = {
    content: ""
}

export default Notification