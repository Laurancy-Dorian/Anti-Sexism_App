import React, {Component} from 'react'

class Remark extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div id={"remark-" + this.props.data.id_remark} className="remark container">
                <div className="header-remark row">
                    <div className="remark-user col-6">Par { this.props.data.pseudo_user }</div>
                    <div className="remark-date col-6 text-right">Le { this.props.data.date_remark }</div>
                </div>
                <div className="content-remark">
                    <div className="description-remark">
                        { this.props.data.description_remark }
                    </div>
                    <div className="remark-buttons container row">
                        <div className="btn btn-group remark-button remark-button-seen row col ml-5 mr-5">
                            <button className="btn btn-primary col-10">J'ai déjà vu</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_seen_remark } </div>
                        </div>
                        
                        <div className="btn btn-group remark-button remark-button remark-button-suffered row col ml-5 mr-5">
                            <button className="btn btn-primary col-10">J'ai déjà subi</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_suffered_remark } </div>
                        </div>
                        
                    </div>
                   
                </div>
                <div className="footer-remark row">
                    
                </div>
            </div>
         );
    }
}
 
export default Remark;