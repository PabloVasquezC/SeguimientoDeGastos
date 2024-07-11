import React, { useState, useEffect } from 'react';

function Watch() {
    const [time, setTime] = useState(new Date()); 

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000 
        );

        return () => {
            clearInterval(timerID); 
        };
    }, []);

    function tick() {
        setTime(new Date()); 
    }

    return (
        <div>
            <h2 className='text-2xl'>{time.toLocaleTimeString()}.</h2> 
        </div>
    );
}

export default Watch;
