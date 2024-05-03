import "./Popup.css";
import { useState } from "react";

function Popup({ close, ret, startVal }) {
    const [inputVal, setInputVal] = useState(startVal);
    const [focussed, setFocussed] = useState(false);

    const updateVal = e => {
        setInputVal(e.target.value);
    }

    const returnDetails = () => {
        ret(inputVal);
        close();
    }

    const toggleFocus = () => {
        setFocussed(!focussed);
    }

    return (<div id="prompt">
        <button id="close-popup" onClick={close}>X</button>
        <h1>Enter Mission Details:</h1>
        <div id="name-input-container" className={focussed ? "focussed-name-input" : "unfocussed-name-input"}>
            <input id="name-input" type="text" name="date-name" onChange={updateVal} onFocus={toggleFocus} onBlur={toggleFocus} placeholder="Name" defaultValue={startVal}></input>
        </div>
        <button id="popup-submit" onClick={returnDetails}>Submit</button>
    </div >);
}

export default Popup;