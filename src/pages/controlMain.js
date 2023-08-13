import React, { useEffect, useState } from 'react';
import MainPage from '../test';

const DataDisplay = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3007');

        ws.onmessage = (event) => {
            const receivedData = event.data;
            console.log(`Received data from server: ${receivedData}`);
            setData(receivedData);
        };

        ws.onopen = () => {
            console.log('Connected to server');
        };

        ws.onclose = () => {
            console.log('Disconnected from server');
        };

        // Clean up the WebSocket connection on component unmount
        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            {data ? (<>
                <MainPage data={JSON.parse(data)} />
            </>) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default DataDisplay;