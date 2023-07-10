import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from "./components/Counter1.jsx";
import Counter2 from "./components/Counter2.jsx";

function App() {
    return (
        <div>
            <Counter1/>
            <Counter2/>
        </div>
    )
}

export default App
