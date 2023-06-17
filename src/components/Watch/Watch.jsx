import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);

    }
    return (
        <div>
            <h1>Hello Watch</h1>
            <h1> Currant Rannig Steps : {steps}</h1>
            <button onClick={increseSteps}>IncreseSteps</button>
        </div>
    );
};

export default Watch;