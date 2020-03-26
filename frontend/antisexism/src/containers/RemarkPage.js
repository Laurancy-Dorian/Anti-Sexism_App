import React, {Component} from 'react'
import Remark from '../components/Remarks/Remark'
import ResponsesList from '../components/Responses/ResponsesList'

import config from "../config/config"


class RemarkPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            remark: {},
            responses: []
        }
    }

    fetchRemark = () => {
        fetch(config.api + "/remarks/" + this.props.idRemark)
        .then(response => response.json())
        .then(result =>  {
            this.setState(function(state) {
                return {
                    remark: result[0],
                    responses: state.responses
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
                    responses: result
                };
            });
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount = () => {
        this.fetchRemark()
        this.fetchResponses()
    }


    render() { 
        return ( 
            <div className="remark-page container">
               <Remark data={this.state.remark} />
               <ResponsesList responses={this.state.responses} />
            </div>
         );
    }
}
 
export default RemarkPage;