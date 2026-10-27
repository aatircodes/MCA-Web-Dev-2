import React, { useEffect, useState } from 'react'

const Project = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {

        if (name === "java") {
            setMessage("Java is a programming language");
        } else {
            setMessage("");
        }

    }, [name]);

    return (
        <div>

            <label htmlFor="search">Search:  </label>

            <input
                type="text"
                placeholder="Search here..."
                value={name}
                id="search"
                onChange={(e) => setName(e.target.value)}
            />

            <h1>{message}</h1>

        </div>
    )
}

export default Project