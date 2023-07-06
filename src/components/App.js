
import React ,{useState} from "react";
import './../styles/App.css';

const App= ()=> {
    let [option , setOption] = useState(null);
    return (
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
                <div>
                    <h2>Child Component 1</h2>
                    <button onClick={()=>setOption("Option 1")}>Option 1</button>
                </div>
                <div>
                    <h2>Child Component 2</h2>
                    <button onClick={()=>setOption("Option 2")}>Option 2</button>
                </div>
                <p>Selected Option: {option}</p>
            </div>
        </div>
    )
}


export default App