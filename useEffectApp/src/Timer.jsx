import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div>Timer: {counter}</div>
    )
}

export default Timer