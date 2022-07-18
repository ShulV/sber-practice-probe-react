import React from 'react'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid gray',
        borderRadius: '5px',
        padding: '5px',
        marginBottom: '5px',
    },
    btn: {

    }
}

function TodoItem({ todo, index, onChange}) {
    let classes = []
    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                type='checkbox' 
                onChange={()=>onChange(todo.id)}
                checked={todo.completed}
                />
                <strong>{ index + 1}</strong>
                &nbsp;
                { todo.title }
                { console.log(todo)}
            </span>
            <button>x</button>
        </li>
    );
  }

export default TodoItem