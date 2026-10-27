const Counter = (props) => {
    return (
        <div id="counter-container">
            <div id="cntr-dsp">
                Counter {props.id}: You clicked {props.count} times
            </div>

            <div id="btn-container">
                <button
                    id="incre"
                    className="btns"
                    onClick={() => props.increment(props.id)}
                >
                    Increment
                </button>

                <button
                    id="decre"
                    className="btns"
                    onClick={() => props.decrement(props.id)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
