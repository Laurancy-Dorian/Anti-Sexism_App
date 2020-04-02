import React from 'react'

import {
    Link
} from "react-router-dom";

function AdminPanel(props) {

    const cards = [
        {
            name: "Gérer les Catégories de Remarques",
            link: "/remarkcontext"
        },
        {
            name: "Gérer les Types de Réponses",
            link: "/responsestypes"
        },
        {
            name: "Gérer les remarques",
            link: "/remarks"
        },
    ]

    const content = cards.map(elem => {
        return (
            <Link to={"/admin" + elem.link} key={elem.link} className="card col-12 col-md-5 col-lg-5 m-2" >
                <div className="card-body d-flex justify-content-center align-items-center text-center">
                    <h5 className="card-title">{elem.name}</h5>     
                </div>
            </Link>
        );
    });

    return (
        <div className="admin container">
            <div className="row  d-flex justify-content-center">
            {content}
            </div>
        </div>
    )
            
}

export default AdminPanel