import React from "react";
//import ReactDOM from "react-dom/client";

function Card(props){
    return (
        <div className="card">
            <div className="card-img" >
                <img className="rounded" src={props.img} alt="dummy alt"/>
            </div>
            <div>
                <h1 className="name">Name:{props.name}</h1>
                <p className="info">Email:{props.email}</p>
                <p className="info">Contact:{props.phone}</p>
                <p className="info">Company:{props.company}</p>
            </div>
        </div>

    );

}

export default Card;