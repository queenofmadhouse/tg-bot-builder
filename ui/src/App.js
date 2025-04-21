import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_GATEWAY_HOST}:${process.env.REACT_APP_GATEWAY_PORT}/api/flows`)
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Gateway Test</h1>
            <p>{message || "Loading..."}</p>
        </div>
    );
}

export default App;
