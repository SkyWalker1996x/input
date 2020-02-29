import React, {Component} from 'react';
import InputComponent from "../input-component";
import Condition from "../condition";
import ValidationComponent from "../validation-component";
import CharComponent from "../char-component";
import './App.css'

class App extends Component {

    state = {
        inputValue: ''
    };

    onInputChange = (e) => {
        let value = e.target.value;

        this.setState(({inputValue}) => {
            return {
                inputValue: value
            }
        });
    };

    render() {
        const {inputValue} = this.state;
        const inputLength = inputValue.length;

        return (
            <div className="wrapper">
                <Condition/>
                <InputComponent
                    onInputChange={this.onInputChange}
                    inputValue={inputValue}/>
                <ValidationComponent
                    inputLength={inputLength}/>
                <CharComponent/>
            </div>
        );
    }
}

export default App;
