import React, { useState, useEffect } from 'react'

// Setting a Props interface
interface Props {
    nb: number,
    onDone: () => void
}

// Declaration of our counter component 
const CountdownComponent: React.FC<Props> = ({
    nb,
    onDone
}) => {

    const seconds: number = 30
    // setting states and setter for the seconds
    const [timeState, setTimeState] = useState<number>(seconds);

    // This function decrease the timer value by 1 second or reseting it if the timeState value is 0
    const tick = () => {
        if (timeState === 0) {
            reset()
            onDone()
        }
        else {
            setTimeState(timeState - 1);
        }
    };

    const reset = () => setTimeState(seconds);

    // The useEffect hooks will call the fuction each time the component is re-render
    // here we're calling our timer each second then clearing it
    useEffect(() => {
        const timerId = setTimeout(() => tick(), 1000);
        return () => clearTimeout(timerId);
    });
    // This function will reset the timer each time the nb's value changes
    useEffect(() => reset(), [nb]);

    return (
        <>
            <span className="ms-3"><span className="fw-bold">{timeState}</span> seconds left</span>
        </>
    );
}
export default CountdownComponent