import React, {Component, Fragment} from 'react';
import Input from "../input";
import Condition from "../condition";
import ValidationComponent from "../validation-component";
import CharComponent from "../char-component";
import './App.css'

class App extends Component{

    render() {
        return (
            <div className="wrapper">
                <Condition/>
                <Input/>
                <ValidationComponent/>
                <CharComponent/>
            </div>
        );
    }
}

export default App;
