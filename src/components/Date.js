import "./Date.css";
import { useState } from "react";
import { changeDate } from "../data";
import Popup from "./Popup";

function Date({ dateInfo, del, update }) {
    const [completed, setCompleted] = useState(dateInfo.completed);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const toggleCompleted = () => {
        changeDate(dateInfo.id, { completed: !completed });
        setCompleted(!completed);
    }

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const deleteSelf = () => {
        toggleDropdown();
        del(dateInfo.id);
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const editName = () => {
        setShowPopup(true);
        toggleDropdown();
    }

    const updateName = value => {
        update(dateInfo.id, value);
    }

    return (<div className="date">
        {showPopup && <Popup close={togglePopup} ret={updateName} startVal={dateInfo.name} />}
        <div onClick={toggleCompleted} className="checkbox">{completed ? "X" : " "}</div>
        <div style={{ "text-decoration": completed && "line-through" }}>{dateInfo.name}</div>
        <div className="edit-icon" onClick={toggleDropdown}>⋮</div>
        <div className="date-dropdown" style={{ maxHeight: showDropdown ? "100px" : "0px" }}>
            <div className="dropdown-element">View/Add Pictures</div>
            <div className="dropdown-element" onClick={editName}>Edit</div>
            <div className="dropdown-element" onClick={deleteSelf}>Delete</div>
        </div>
    </div>);
}

export default Date;