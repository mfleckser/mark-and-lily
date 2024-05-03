import "./Missions.css"
import { useState, useEffect } from "react";
import { getAllDates, createDate, deleteDate, changeDate } from "../../data.js";
import Date from "../../components/Date";
import Popup from "../../components/Popup";

function Missions() {
    const [dates, setDates] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        fetchDates();
    }, []);

    const fetchDates = async () => {
        const data = await getAllDates();

        const allDates = [];

        data.forEach(date => {
            const dateInfo = date.data();
            allDates.push({id: date.id, name: dateInfo.name, completed: dateInfo.completed});
        });

        setDates(allDates);
    }

    const openPopup = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    const addDate = async newName => {
        const newId = await createDate({name: newName, completed: false}); // add date to database

        // just add date to local state, don't bother fetching again
        // will provide same result
        setDates([...dates, {id: newId, name: newName, completed: false}]);
    }

    const removeDate = dateId => {
        deleteDate(dateId);
        setDates(dates.filter(date => date.id !== dateId));
    }

    const updateDate = (id, value) => {
        changeDate(id, {name: value})

        setDates(dates.map(date => {
            if (date.id === id) {
                return {id: date.id, name: value, completed: date.completed};
            } else {
                return date;
            }
        }))
    }

    return ( <div id="missions">
        {showPopup && <Popup close={closePopup} ret={addDate} default=""/>}
        <h1>Mission List</h1>
        {dates.map(dateInfo => {return <Date key={dateInfo.id} dateInfo={dateInfo} del={removeDate} update={updateDate}/>})}
        <div id="new-date-btn" onClick={openPopup}>New Mission</div>
    </div> );
}

export default Missions;