import React, {Component} from 'react'
import Remark from './Remark'
import config from "../../config/config"

class RemarksList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            remarks: []
        }
    }

    componentDidMount = () => {
        fetch(config.api + "/remarks")
            .then(response => response.json())
            .then(result =>  {
                this.setState({
                    remarks: result
                })
            })
            .catch(error => console.log('error', error));
    }


    render() { 

        const remarks = this.state.remarks.map(remark => {
            return (
                <Remark key={remark.id_remark} data={remark} />
            )
        })

        return ( 
            <div className="remarks remarks-list container">
                {remarks}
            </div>
         );
    }
}
 
export default RemarksList;