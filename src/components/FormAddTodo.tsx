import React, { useState } from "react";

const FormAddTodo = () => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <form>
            <label htmlFor="todo">
                Todo
                <input type="text" id="todo" placeholder="Ingrese Todo" value={text} onChange={handleChange} />
                <button type="submit">Add todo</button>
            </label>
        </form>
    )
}

export default FormAddTodo
