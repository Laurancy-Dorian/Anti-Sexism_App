import React, {Component} from 'react'
import Remark from '../components/Remarks/Remark'
import ResponsesList from '../components/Responses/ResponsesList'

import config from "../config/config"


class RemarkPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            remark: {id_remark : null}
        }
    }

    componentDidMount = () => {
        fetch(config.api + "/remarks/" + this.props.idRemark)
            .then(response => response.json())
            .then(result =>  {
                this.setState({
                    remark: result[0]
                })
            })
            .catch(error => console.log('error', error));
    }


    render() { 

        return ( 
            <div className="remark-page container">
               <Remark data={this.state.remark} />
               <ResponsesList idRemark={this.props.idRemark} />
            </div>
         );
    }
}
 
export default RemarkPage;