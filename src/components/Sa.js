import Shuvo from "./Shuvo";
import React from "react";

function Sa(){
    return (
        <div>
            <h3> I am component</h3>
            <Shuvo name="Shuvo" age="23">Lorem ipsum dolor sit amet </Shuvo>
            <Shuvo name="Shuvo Ahmad" age="2" />
            <Shuvo name="Shuvo Khondoker" age="1" />
            <Shuvo name="Moudut Ahmad" age="10" />
            <Shuvo name="Moudut Ahmad" age="10" > Lorem ipsum dolor sit amet 3 </Shuvo>
        </div>
    );
}

export default Sa;