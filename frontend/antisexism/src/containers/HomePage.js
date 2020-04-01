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
            contextList : []
        }
    }

    fetchAllRemarks = () => {
        fetch(config.api + "/remarks")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: result,
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

    submitNewRemark = (message, notificationType) => {
        this.fetchAllRemarks()
        this.props.notificationHandler(message, notificationType)
    }


    render() { 

        return ( 
            <div className="home-page container">
                <AddRemark afterSubmit={this.submitNewRemark} contextList={this.state.contextList} />
                <RemarksList contextList={this.state.contextList} remarks={this.state.remarks} />
            </div>
         );
    }
}
 
export default HomePage;