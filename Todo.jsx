import { useState } from 'react';

export default function Todo() {
    const [inputValue, setValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSave = () => {
        console.log("oook");
        if (inputValue.trim()) {
            const added = [...todos, { text: inputValue }];
            setTodos(added);
            setValue('');
        }
    };

    const deleteTodo = (index) => {
        const data = todos.filter((_, ind) => ind !== index);
        setTodos(data);
    };

    const handleEdit = (index, newText) => {
        const updatedTodos = todos.map((todo, ind) =>
            ind === index ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>

            <ul>
                {todos.map((data, index) => (
                    <li key={index}>
                        <input
                            type="text"
                            value={data.text}
                            onChange={(e) => handleEdit(index, e.target.value)}
                        />
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
