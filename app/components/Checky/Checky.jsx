import React, { useState } from "react";

const Checky = () => {
    const [isChecked, setChecked] = useState(false);

    function handleCheck() {
        // simulate a delay in state change
        setTimeout(() => {
            setChecked((prevChecked) => !prevChecked);
        }, 2000);
    }

    return (
        <div>
            <h2>Checky</h2>
            <input type="checkbox" onChange={handleCheck} id="checky2" />
            <label htmlFor="checky2">{isChecked.toString()}</label>
        </div>
    );
};

export default Checky;
