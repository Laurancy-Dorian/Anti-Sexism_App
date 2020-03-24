import React, {Component} from 'react'
import Response from './Response'
import config from "../../config/config"

class ResponsesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            responses: []
        }
    }

    componentDidMount = () => {
        fetch(config.api + "/remarks/" + this.props.idRemark + "/responses")
            .then(response => response.json())
            .then(result =>  {
                this.setState({
                    responses: result
                })
            })
            .catch(error => console.log('error', error));
    }


    render() { 

        const responses = this.state.responses.map(response => {
            return (
                <Response key={"response-" + response.id_response} data={response} />
            )
        })

        return ( 
            <div className="responses responses-list container">
                {responses}
            </div>
         );
    }
}
 
export default ResponsesList;