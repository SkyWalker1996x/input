import React, {useState} from 'react';

import Condition from "../condition";
import ValidationComponent from "../validation-component";
import CharComponent from "../char-component";
import './App.css'

const App = () => {

    const [chars, setChars] = useState([]);

    const createChars = (arr) =>
        arr.map((char, id) => ({id, char}));

    const onInputChange = (e) => {
        const arr = e.target.value.split('');

        setChars(createChars(arr))
    };

    const onDeleteChar = (arr, id) => {
        setChars(arr.filter((item) => item.id !== id))
    };

    const inputValue = chars.map(({char}) => char).join('');

    return (
        <div className="wrapper">
            <Condition/>
            <input
                type="text"
                onChange={onInputChange}
                value={inputValue}/>
            <ValidationComponent
                charsLength={chars.length}/>
            <CharComponent
                chars={chars}
                onDeleteChar={onDeleteChar}/>
        </div>
    );
};

App.propTypes = {

};

export default App;
