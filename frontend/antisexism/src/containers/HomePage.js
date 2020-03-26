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
            notification: ""
        }
    }

    fetchAllRemarks = () => {
        fetch(config.api + "/remarks")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: result,
                    notification: state.notification
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.fetchAllRemarks()
    }

    submitNewRemark = () => {
        this.setState(function(state) {
            return {
                remarks: state.remarks,
                notification: "Votre remarque a bien été ajoutée"
            };
        });
        this.fetchAllRemarks()
    }


    render() { 

        return ( 
            <div className="home-page container">
                <AddRemark afterSubmit={this.submitNewRemark} />
                {this.state.notification.length > 0 ? <Notification content={this.state.notification} /> : ""}
                <RemarksList remarks={this.state.remarks} />
            </div>
         );
    }
}
 
export default HomePage;