'use client'

import { useState, useEffect } from 'react';

export default function MessageHour() {
    const [displayHour, setDisplayHour] = useState(null);

    useEffect(() => {
        if(!displayHour) {
            const now = new Date();
            const hour = now.getHours();
            let minutes = now.getMinutes();

            if(minutes < 10 ) {
                minutes = '0'+minutes;
            }

            const currentHour = `${hour}:${minutes}`;
            setDisplayHour(currentHour)
        }
    }, [displayHour]);

    return (
        displayHour && <p>{displayHour}</p>
    )
}