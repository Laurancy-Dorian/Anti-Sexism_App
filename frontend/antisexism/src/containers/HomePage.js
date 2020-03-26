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
            notificationType: ""
        }
    }

    fetchAllRemarks = () => {
        fetch(config.api + "/remarks")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: result,
                    notification: state.notification,
                    notificationType: state.notificationType
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.fetchAllRemarks()
    }

    submitNewRemark = (message, notificationType) => {
        this.setState(function(state) {
            return {
                remarks: state.remarks,
                notification: message,
                notificationType: notificationType
            };
        });
        this.fetchAllRemarks()
    }


    render() { 

        return ( 
            <div className="home-page container">
                <AddRemark afterSubmit={this.submitNewRemark} />
                {this.state.notification.length > 0 ? <Notification type={this.state.notificationType} content={this.state.notification} /> : ""}
                <RemarksList remarks={this.state.remarks} />
            </div>
         );
    }
}
 
export default HomePage;