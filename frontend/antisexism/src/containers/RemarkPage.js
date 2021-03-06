import React, {Component} from 'react'
import RemarksList from '../components/Remarks/RemarksList'
import ResponsesList from '../components/Responses/ResponsesList'
import AddResponse from '../components/Responses/AddResponse'
import Notification from '../components/utils/Notification'


import config from "../config/config"


class RemarkPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            remark: [],
            responses: [],
            contextList: [],
            responsesTypeList: [],
            notification: "",
            notificationType : "warning"
        }
    }

    fetchRemark = () => {
        fetch(config.api + "/remarks/" + this.props.idRemark)
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remark: result,
                    responses: state.responses,
                    contextList: state.contextList,
                    responsesTypeList: state.responsesTypeList,
                    notification: state.notification,
                    notificationType: state.notificationType
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    fetchResponses = () => {
        fetch(config.api + "/remarks/" + this.props.idRemark + "/responses")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remark: state.remark,
                    responses: result,
                    contextList : state.contextList,
                    responsesTypeList: state.responsesTypeList,
                    notification: state.notification,
                    notificationType: state.notificationType
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
                    responses: state.responses,
                    contextList: result,
                    responsesTypeList: state.responsesTypeList,
                    notification: state.notification,
                    notificationType: state.notificationType,
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    fetchAllResponseTypes = () => {
        fetch(config.api + "/responses_types")
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remarks: state.remarks,
                    responses: state.responses,
                    contextList: state.contextList,
                    responsesTypeList: result,
                    notification: state.notification,
                    notificationType: state.notificationType,
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.fetchRemark()
        this.fetchResponses()
        this.fetchAllContexts()
        this.fetchAllResponseTypes()
    }

    submitNewResponse = (message, notificationType) => {
        this.setState(function(state) {
            return {
                remark: state.remark,
                responses: state.responses,
                contextList: state.contextList,
                responsesTypeList: state.responsesTypeList,
                notification: message,
                notificationType: notificationType
            };
        });
        this.fetchResponses()
    }

    updateResponse = (idResponse) => {
        fetch(config.api + "/remarks/" + this.props.idRemark + "/responses/" + idResponse)
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                const newState = state.responses.map(response => result.find(newResponse => newResponse.id_response === response.id_response) || response);
                return {
                    responses: newState
                };
            });
        })
        .catch(error => console.log('error', error));
    }


    render() { 
        return ( 
            <div className="remark-page container">

               <RemarksList remarks={this.state.remark} contextList={this.state.contextList} handleUpdate={this.fetchRemark}/>
               {this.state.notification.length > 0 ? <Notification type={this.state.notificationType} content={this.state.notification} /> : ""}
               <AddResponse idRemark={parseInt(this.props.idRemark)} afterSubmit={this.submitNewResponse} responseTypeList={this.state.responsesTypeList} />
               <ResponsesList responses={this.state.responses} responseTypeList={this.state.responsesTypeList} handleUpdate={this.updateResponse} />
            </div>
         );
    }
}
 
export default RemarkPage;