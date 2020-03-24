import React, {Component} from 'react'

class Response extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            like : false,
            dislike : false
        }
    }

    componentDidMount = () => {
    }

    handleClickLike = () => {
        console.log("Like")
    }

    handleClickDislike = () => {
        console.log("Dislike")
    }


    render() { 

        let date = new Date(this.props.data.date_response)
        date = (date.getDate()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + "/" + (1+date.getMonth()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + "/" + date.getFullYear() 
                + " à "
                + (date.getHours()).toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false}) 
                + ":" 
                + date.getMinutes().toLocaleString('fr-FR', {minimumIntegerDigits: 2, useGrouping:false})

        return ( 
            <div id={"response-" + this.props.data.id_response} className="response container">
                <div className="header-response row">
                    <div className="response-user col-6">Par { this.props.data.pseudo_user ? this.props.data.pseudo_user : "Anonyme" }</div>
                    <div className="response-date col-6 text-right">Le { date } </div>
                </div>
                <div className="content-response">
                    <div className="description-response">
                        { this.props.data.description_response }
                    </div>
                    <div className="remark-buttons container row justify-content-center">
                        <div onClick={this.handleClickLike} className="btn btn-group remark-button remark-button-seen row col-12 col-lg-3 ml-md-5 mr-md-5">
                            <button className="btn btn-primary col-10">Pertinent</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_likes_response } </div>
                        </div>
                        
                        <div onClick={this.handleClickDislike} className="btn btn-group remark-button remark-button remark-button-suffered col-12 col-lg-3 row col ml-md-5 mr-md-5">
                        <button className="btn btn-primary col-10">Non Pertinent</button>
                            <div className="remark-button-number btn btn-light col-2"> { this.props.data.nb_dislikes_response } </div>
                            
                        </div>
                        
                    </div>                  
                </div>
            </div>
         );
    }
}
 
export default Response;