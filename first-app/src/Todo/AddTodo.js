import React, { useState } from 'react'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form className='adding-form' onSubmit={submitHandler}>
            <input value={value} className='adding-form-input' onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

export default AddTodo