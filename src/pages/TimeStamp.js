import React, { useEffect, useState } from 'react';

const TimeStamp = () => {
    // const hour = moment().startOf('hour').fromNow('h:mm');
    const [time, setTime] = useState("");


    useEffect(() => {
        const updateTime = setInterval(() => {
            let timestamp = 10999285;
            const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
            let interval = Math.floor(seconds / 31536000);
            if (interval >= 1) {
                setTime(`${interval} year${interval > 1 ? "s" : ""} ago`);
                return;
            }
            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) {
                setTime(`${interval} month${interval > 1 ? "s" : ""} ago`);
                return;
            }
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                setTime(`${interval} day${interval > 1 ? "s" : ""} ago`);
                return;
            }
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
                setTime(`${interval} hour${interval > 1 ? "s" : ""} ago`);
                return;
            }
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
                setTime(`${interval} minute${interval > 1 ? "s" : ""} ago`);
                return;
            }
            setTime(`${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? "s" : ""} ago`);
        })
        return () => clearInterval(updateTime, 60000)
    });

    return (
        <div>
            <p>{ }</p>
            <h2>{time} </h2>
        </div>
    );
};

export default TimeStamp;