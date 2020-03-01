import React, {Component} from 'react';
import Condition from "../condition";
import Validation from "../Validation";
import Chars from "../Chars";
import './App.styled.css'

class App extends Component {
    state = {
        chars: []
    };

    createChar = (value) =>
        value.split('').map((label, id) =>
            ({ id, label })
        );

    onInputChange = (e) => {
        let value = e.target.value;

        this.setState({chars: this.createChar(value)});
    };

    onDeleteChar = (removeId) =>
        this.setState({
            chars: this.state.chars.filter(
                ({label, id}) => id !== removeId
            )
        });

    render() {
        const {chars} = this.state;
        const inputValue = chars.map(({label}) => label).join('');
        const inputLength = inputValue.length;

        console.log('chars: ', chars);
        console.log('inputV: ', inputValue);

        return (
            <div className="wrapper">
                <Condition/>
                <input
                    type="text"
                    onChange={this.onInputChange}
                    value={inputValue}
                />
                <Validation
                    inputLength={inputLength}
                />
                <Chars
                    chars={chars}
                    onDeleteChar={this.onDeleteChar}
                />
            </div>
        );
    }
}

export default App;
