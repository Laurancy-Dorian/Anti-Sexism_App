import React, {Component} from 'react'
import Remark from '../components/Remarks/Remark'
import ResponsesList from '../components/Responses/ResponsesList'
import AddResponse from '../components/Responses/AddResponse'
import Notification from '../components/utils/Notification'


import config from "../config/config"


class RemarkPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            remark: {},
            responses: [],
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
                    remark: result[0],
                    responses: state.responses,
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
                    notification: state.notification,
                    notificationType: state.notificationType
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.fetchRemark()
        this.fetchResponses()
    }

    submitNewResponse = (message, notificationType) => {
        this.setState(function(state) {
            return {
                remark: state.remark,
                responses: state.responses,
                notification: message,
                notificationType: notificationType
            };
        });
        this.fetchResponses()
    }


    render() { 
        return ( 
            <div className="remark-page container">
               <Remark data={this.state.remark} />
               <AddResponse idRemark={parseInt(this.props.idRemark)} afterSubmit={this.submitNewResponse} />
               {this.state.notification.length > 0 ? <Notification type={this.state.notificationType} content={this.state.notification} /> : ""}

               <ResponsesList responses={this.state.responses} />
            </div>
         );
    }
}
 
export default RemarkPage;