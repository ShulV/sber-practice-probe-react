const styles = {

}

export default function TodoItem({ todo, index }) {
    return (
        <li>
            <strong>{ index + 1}</strong>
            { todo.title }</li>
    );
  }
