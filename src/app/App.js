import React from 'react';
import Condition from "../condition";
import ValidationComponent from "../validation-component";
import CharComponent from "../char-component";
import './App.css'

const App = () => {
    return (
        <div className="wrapper">
            <Condition/>
            <input type="text"/>
            <ValidationComponent/>
            <CharComponent/>
        </div>
    );
};

export default App;
