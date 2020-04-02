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
        fetch(config.api + "/remarks?context=[" + this.props.context + "]")
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

    updateRemark = (idRemark) => {
        fetch(config.api + "/remarks/" + idRemark + "?context=[" + this.props.context + "]")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                const newState = state.remarks.map(remark => result.find(newRemark => newRemark.id_remark === remark.id_remark) || remark);
                return {
                    remarks: newState
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

    componentDidUpdate = (prevProps) => {
        if (prevProps.context !== this.props.context) {
            this.fetchAllRemarks()
            console.log(this.props)

        }
    }

    submitNewRemark = (message, notificationType) => {
        this.fetchAllRemarks()
        this.props.notificationHandler(message, notificationType)
    }


    render() { 
        return ( 
            <div className="home-page container">
                <AddRemark afterSubmit={this.submitNewRemark} contextList={this.state.contextList} />
                <RemarksList contextList={this.state.contextList} remarks={this.state.remarks} handleUpdate={this.updateRemark} />
            </div>
         );
    }
}
 
export default HomePage;