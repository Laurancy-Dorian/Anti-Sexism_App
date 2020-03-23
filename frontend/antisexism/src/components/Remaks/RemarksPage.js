import React, {Component} from 'react'
import Remark from './Remark'

class RemarkPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            remarks: []
        }
    }

    componentDidMount = () => {
        fetch("http://vps685054.ovh.net:8080/api/remarks")
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    render() { 

        const remarks = this.state.remarks.map(remark => {
            return (
                <Remark key={remark.id_remark} data={remark} />
            )
        })

        return ( 
            <div className="remarks container">
                {remarks}
            </div>
         );
    }
}
 
export default RemarkPage;