import React, {Component} from 'react'
import config from "../../config/config"
import PropTypes from 'prop-types'
import {lightenDarkenColor, getContrastYIQ} from '../../lib/color-management'

import {
    Link
} from "react-router-dom";

/**
 * Remark Component
 */
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
                this.setState({
                    nb_comments: result.length,
                })
            })
            .catch(error => console.log('error', error));
    }


    fetchLocal = (element) => {
        if (window.localStorage.getItem(element)) {
            if (JSON.parse(window.localStorage.getItem(element)).find(i => i === this.props.data.id_remark)) {
                this.setState({
                    [element]: true
                })
            } else {
                this.setState({
                    [element]: false
                })
            }
        }
    }


    componentDidMount = () => {
        this.fetchNumberComments()
        this.fetchLocal("seen")
        this.fetchLocal("suffered")
    }



    componentDidUpdate(prevProps) {
        if (prevProps.data.id_remark !== this.props.data.id_remark) {
            this.fetchNumberComments()
            this.fetchLocal("seen")
            this.fetchLocal("suffered")
        }        
      }
 

    handleClick = (event) => {
        const elem = event.target.name

        let array = []
        if (window.localStorage.getItem(elem)) {
            array = JSON.parse(window.localStorage.getItem(elem))
        }


        let myHeaders = new Headers();
        let urlencoded = new URLSearchParams();
        let requestOptions = {
            method: '',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };


        if(array.indexOf(this.props.data.id_remark) === -1) {
            array.push(this.props.data.id_remark)
            requestOptions.method = "PUT"
        } else {
            array = array.filter(i => i != this.props.data.id_remark)
            requestOptions.method = "DELETE"
        }
        
        

        fetch("http://vps685054.ovh.net:8080/api/remarks/"+ this.props.data.id_remark + "/" + elem, requestOptions)
            .then(response =>  {
                if (response.status != 200) throw Error ("Modification non effectuée")
                window.localStorage.setItem(elem, JSON.stringify(array))
                this.fetchLocal(elem)
                this.props.handleUpdate(this.props.data.id_remark)
            })
            .catch(error => console.log('error', error));
        
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


        const color = this.props.context ? this.props.context.color_context : ""
        const lighterColor = this.props.context ? lightenDarkenColor(color, 200) : ""
        const buttonColor = this.props.context ? lightenDarkenColor(color, -50) : ""
        const fontColor =  this.props.context ? getContrastYIQ(color) : ""


        return ( 
            <div 
                style={{background: lighterColor}} 
                id={"remark-" + this.props.data.id_remark} 
                className="remark container"
                >

                <div style={{background: color, "color": fontColor}} className="header-remark row">
                    <div className="remark-user col-4">
                        <span className="mr-1" >Par { this.props.data.pseudo_user ? this.props.data.pseudo_user : "Anonyme" } </span>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="remark-context col-4 text-center">
                        <i className="fas fa-quote-left"></i>
                        <span className="mr-2 ml-2">{this.props.context ? this.props.context.name_context : ""}</span>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="remark-date col-4 text-right">
                        Le { date } 
                    </div>
                </div>
                <div className="content-remark">
                    <Link to={ "/remarks/" + this.props.data.id_remark }>
                        <div className="description-remark">
                            { this.props.data.description_remark }
                        </div>
                    </Link>
                    <div className="remark-buttons container row justify-content-center">
                        <div onClick={this.handleClick} className={"btn btn-group remark-button remark-button-seen row col-12 col-lg-4 ml-md-5 mr-md-5 " } >
                            <button className={"btn btn-primary col-10 " + (this.state.seen ? "clicked" : "")} name="seen" style={this.state.seen ? {} : {background:buttonColor}}>J'ai déjà entendu</button>
                            <button className={"remark-button-number btn btn-light col-2 " + (this.state.seen ? "clicked" : "")} name="seen"> { this.props.data.nb_seen_remark } </button>
                        </div>
                        
                        <div onClick={this.handleClick} className="btn btn-group remark-button remark-button remark-button-suffered col-12 col-lg-4 row col ml-md-5 mr-md-5">
                            <button className={"btn btn-primary col-10 " + (this.state.suffered ? "clicked" : "")} name="suffered" style={this.state.suffered ? {} : {background:buttonColor}}>J'ai déjà subi</button>
                            <button className={"remark-button-number btn btn-light col-2 " + (this.state.suffered ? "clicked" : "")} name="suffered"> { this.props.data.nb_suffered_remark } </button>
                        </div>
                    </div>
                   
                </div>
                
                <div className="footer-remark text-right">
                    <Link to={ "/remarks/" + this.props.data.id_remark }>
                        <div>
                                {this.state.nb_comments} <i className="fas fa-comments"></i>
                        </div>
                    </Link>
                </div>
                
            </div>
         );
    }
}

Remark.propTypes = {
    /** 
     * The object containing the data of the remark
     *      data.id_remark              The id of the Remark
     *      data.description_remark     The content of the remark
     *      data.nb_seen_remark         The number of users that declared they have seen a situation like this one
     *      data.nb_suffered_remark     The number of users that declared they have suffered a situation like this one
     *      data.date_remark            The date this remark has been posted
     *      data.pseudo_user            The pseudo of the user who posted this remark, null if anonymous
     *      data.id_context             The id of the context of this remark
     */
    data: PropTypes.shape({
        id_remark: PropTypes.number,
        description_remark: PropTypes.string,
        nb_seen_remark: PropTypes.number,
        nb_suffered_remark: PropTypes.number,
        date_remark: PropTypes.string,
        pseudo_user: PropTypes.string,
        id_context: PropTypes.number
    }),

    
    /**
     * the Remark context of this remark
     *      id_context	    number  The id of the context
     *      name_context	String	The name
     *      color_context	String  The color associated (hex)
     */
    context: PropTypes.shape({
        id_context: PropTypes.number,
        name_context: PropTypes.string,
        color_context: PropTypes.string
    })
}

export default Remark;