import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtask, deletetask, updatetask } from './redux/Action';
import './App.css';

function App() {''
    const dispatch = useDispatch();
    const [inputvalue, setinput] = useState("");
    const [editdata, seteditdata] = useState(null); 
    const todos = useSelector((state) => state.todo);

    const handleTask = () => {
        if (inputvalue.trim()) {
            dispatch(Addtask(inputvalue));
            setinput("");
        }
    };

    const handleDelete = (index) => {
        dispatch(deletetask(index));
    };

    const handleEdit = (index) => {
        const data = todos.find((_, ind) => ind === index);
        setinput(data.text);
        seteditdata(index);
    };

    const handleSave = (index) => {
        dispatch(updatetask(index, inputvalue));
        seteditdata(null);
        setinput("");
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <input
                type='text'
                value={inputvalue}
                onChange={(e) => { setinput(e.target.value) }}
            />
            <button onClick={handleTask}>Add</button>
            <ul>
                {todos.map((data, index) => (
                    <li key={index}>
                        {editdata === index ? (
                            <div>
                                <input
                                    type='text'
                                    value={inputvalue}
                                    onChange={(e) => { setinput(e.target.value) }}
                                />
                                <button onClick={() => handleSave(index)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                {data.text}
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
