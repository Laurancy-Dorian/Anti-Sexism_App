import React, { Component } from 'react'
import config from "../../config/config"
import RemarkLine from "./RemarkLine"


class ManageRemarks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            remarks: []
        }
    }
    componentDidMount = () => {
        this.fetchAllRemarks()
    }

    fetchAllRemarks = () => {

        fetch(config.api + "/remarks")
            .then(response => response.json())
            .then(result => {
                this.setState(function (state) {
                    return {
                        remarks: result,
                    };
                });
            })
            .catch(error => console.log('error', error));
    }


    render() {
        const remarks = this.state.remarks.map(r => {
            return (
                <RemarkLine key={r.id_remark} data={r} onDelete={this.fetchAllRemarks} />
            )
        })

        return (
            <div>
                <div className="container" >
                    <div className="row table-dark">
                        <div className="col-12 tableline tableline-header">
                            <div className="row">
                                <div className="col-1 tablecell">
                                    Id
                                </div>
                                <div className="col-7 tablecell">
                                    Description
                                </div>
                                <div className="col-2 tablecell">
                                    Auteur
                                </div>
                                <div className="col-2 tablecell">

                                </div>
                            </div>
                        </div>
                        {remarks}
                    </div>
                </div>

            </div>



        )
    }
}

export default ManageRemarks