import React, {Component} from 'react'
import config from "../../config/config"

class Remark extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nb_comments: 0,
            seen : false,
            suffered : false
        }
    }

    fetchNumberComments = () => {
        fetch(config.api + "/remarks/" + this.props.data.id_remark + "/responses")
            .then(response => response.json())
            .then(result =>  {
                console.log(result)
                this.setState({
                    nb_comments: result.length,
                    seen : false,
                    suffered : false
                })
            })
            .catch(error => console.log('error', error));
    }


    componentDidMount = () => {
        this.fetchNumberComments()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data.id_remark !== this.props.data.id_remark) {
            this.fetchNumberComments()
        }        
      }


 

    handleClickSeen = () => {
        console.log("Seen")
    }

    handleClickSuffered = () => {
        console.log("Suffered")
    }


    render() { 

        let date = new Date(this.props.data.date_remark)
        date = (date.getDate()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + "/" + (1+date.getMonth()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + "/" + date.getFullYear() 
                + " à "
                + (date.getHours()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + ":" 
                + date.getMinutes().toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false})

        return ( 
            <div id={"remark-" + this.props.data.id_remark} className="remark container">
                <div className="header-remark row">
                    <div className="remark-user col-6">Par { this.props.data.pseudo_user ? this.props.data.pseudo_user : "Anonyme" }</div>
                    <div className="remark-date col-6 text-right">Le { date } </div>
                </div>
                <div className="content-remark">
                    <div className="description-remark">
                        { this.props.data.description_remark }
                    </div>
                    <div className="remark-buttons container row justify-content-center">
                        <div onClick={this.handleClickSeen} className="btn btn-group remark-button remark-button-seen row col-12 col-lg-4 ml-md-5 mr-md-5">
                            <button className="btn btn-primary col-10">J'ai déjà entendu</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_seen_remark } </div>
                        </div>
                        
                        <div onClick={this.handleClickSuffered} className="btn btn-group remark-button remark-button remark-button-suffered col-12 col-lg-4 row col ml-md-5 mr-md-5">
                        <button className="btn btn-primary col-10">J'ai déjà subi</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_suffered_remark } </div>
                            
                        </div>
                        
                    </div>
                   
                </div>
                <div className="footer-remark text-right">
                    {this.state.nb_comments} <i className="fas fa-comments"></i>
                </div>
            </div>
         );
    }
}
 
export default Remark;