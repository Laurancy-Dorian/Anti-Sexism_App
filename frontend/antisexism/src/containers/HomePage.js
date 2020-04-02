import React, {Component} from 'react'

import RemarksList from '../components/Remarks/RemarksList'
import AddRemark from '../components/Remarks/AddRemark'

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
        const context = this.props.context ? this.props.context : ""
        const content = this.props.content ? this.props.content : ""
        console.log(config.api + "/remarks?context=[" + context + "]&content=" + content )
        fetch(config.api + "/remarks?context=[" + context + "]&content=" + content )
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: result,
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    updateRemark = (idRemark) => {
        console.log(idRemark)
        fetch(config.api + "/remarks/" + idRemark)
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
        if (prevProps.context !== this.props.context || prevProps.content !== this.props.content) {
            this.fetchAllRemarks()
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