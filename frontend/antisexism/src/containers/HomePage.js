import React, {Component} from 'react'

import RemarksList from '../components/Remarks/RemarksList'
import AddRemark from '../components/Remarks/AddRemark'
import Notification from '../components/utils/Notification'

import config from '../config/config'


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            remarks: [],
            notification: "",
            notificationType: "",
            contextList : [],
        }
    }

    fetchAllRemarks = () => {
        fetch(config.api + "/remarks?context=[" + this.props.context + "]")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: result,
                    notification: state.notification,
                    notificationType: state.notificationType,
                    contextList: state.contextList
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    fetchAllContexts = () => {
        fetch(config.api + "/remarks_contexts")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: state.remarks,
                    notification: state.notification,
                    notificationType: state.notificationType,
                    contextList: result
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.fetchAllRemarks()
        this.fetchAllContexts()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.context !== this.props.context) {
            this.fetchAllRemarks()
            console.log(this.props)

        }
    }

    submitNewRemark = (message, notificationType) => {
        this.setState(function(state) {
            return {
                remarks: state.remarks,
                notification: message,
                notificationType: notificationType,
                contextList: state.contextList
            };
        });
        this.fetchAllRemarks()
    }


    render() { 
        return ( 
            <div className="home-page container">
                <AddRemark afterSubmit={this.submitNewRemark} contextList={this.state.contextList} />
                {this.state.notification.length > 0 ? <Notification type={this.state.notificationType} content={this.state.notification} /> : ""}
                <RemarksList contextList={this.state.contextList} remarks={this.state.remarks} />
            </div>
         );
    }
}
 
export default HomePage;