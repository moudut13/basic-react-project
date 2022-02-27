import React from "react";

function Shuvo(props){
    return(
        <div>
            <h1>Name : {props.name} and Age : { props.age}</h1>
            <p>{props.children}</p>
        </div>
    );
}

export default Shuvo;