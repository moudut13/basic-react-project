import React from "react";
import '../stylesheets/bootstrap.min.css';

const Cards = props =>{
    return(
        <div className="col-md-4 m-auto mb-3">
            <div className="card">
                <div className="card-header">
                    {props.header}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.h5}</h5>
                    <p className="card-text">{props.p}</p>
                    <a href="#" className="btn btn-primary">{props.a}</a>
                </div>
            </div>
        </div>
    );
}
export default Cards;