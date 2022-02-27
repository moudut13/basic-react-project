import React from "react";
import './App.css';
import Cards from "./components/Cards";

function App() {
    return (
        <div className="App">
            <h1>Cards List</h1>
            <hr/>
            <Cards header="Featured" h5="Special title treatment" p="With supporting text below as a natural lead-in to additional content." a="Go somewhere"/>
            <Cards header="Featured" h5="Special title treatment" p="With supporting text below as a natural lead-in to additional content." a="Go somewhere"/>
            <Cards header="Featured" h5="Special title treatment" p="With supporting text below as a natural lead-in to additional content." a="Go somewhere"/>
            <Cards header="Featured" h5="Special title treatment" p="With supporting text below as a natural lead-in to additional content." a="Go somewhere"/>

        </div>
    );
}




export default App;
