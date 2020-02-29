import React, {Component} from 'react';
import InputComponent from "../input-component";
import Condition from "../condition";
import ValidationComponent from "../validation-component";
import CharComponent from "../char-component";
import './App.css'

class App extends Component {

    maxId = 1000;

    state = {
        chars: []
    };

    createChar = (value) => {

        return [...value.split('').map((item) => {
            return {id: this.maxId++, label: item}
        })];
    };

    onInputChange = (e) => {
        let value = e.target.value;

        this.setState(({inputValue}) => {
            return {
                chars: this.createChar(value)
            }
        });
    };

    onDeleteChar = (arr, id) => {
        const idx = arr.findIndex((item) => item.id === id);

        const newArr = [
            ...arr.slice(0, idx),
            ...arr.slice(idx + 1)
        ];

        this.setState(({chars}) => {
            return {
                chars: newArr
            }
        })

    };

    render() {
        const {chars} = this.state;
        const inputValue = [...chars.map((i) => {
            return i.label
        })].join('');
        const inputLength = inputValue.length;

        console.log('chars: ', chars);
        console.log('inputV: ', inputValue);

        return (
            <div className="wrapper">
                <Condition/>
                <InputComponent
                    onInputChange={this.onInputChange}
                    inputValue={inputValue}/>
                <ValidationComponent
                    inputLength={inputLength}/>
                <CharComponent
                    chars={chars}
                    onDeleteChar={this.onDeleteChar}/>
            </div>
        );
    }
}

export default App;
