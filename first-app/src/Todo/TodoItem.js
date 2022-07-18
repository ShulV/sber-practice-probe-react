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

export default function TodoItem({ todo, index, onChange}) {
    return (
        <li style={styles.li}>
            <span>
                <input 
                type='checkbox' 
                onChange={()=>onChange(todo.id)}
                />
                <strong>{ index + 1}</strong>
                &nbsp;
                { todo.title }
            </span>
            <button>x</button>
        </li>
    );
  }
