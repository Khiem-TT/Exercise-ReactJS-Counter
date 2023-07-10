import {useIncrement} from "../hooks/useIncrement.jsx";

function Counter2() {
    const [count, setCount] = useIncrement(2);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={setCount}>Add 2</button>
        </div>
    )
}

export default Counter2;