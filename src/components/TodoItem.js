import { ListGroup, Badge } from 'react-bootstrap'

const TodoItem = (props) => {
  // This is object destructuring
  // We're pulling out each value from the 'props' object in a single line
  const { text, done, id, markAsDone, deleteTodo } = props

  // It would be the same thing if we did it this way:
  // const text = props.text;
  // const done = props.done;

  return (
    <ListGroup.Item>
      {/* Here, we're using conditional rendering to change what gets returned based on the value of 'done' */}
      {
        done ? (
          <>
            <span style={{ textDecoration: 'line-through' }}>{text}</span>
            <span className='float-end'>&#128077;</span>
          </>
        ) : (
          <>
            {text}
            {/* Remember, we use this anonymous function '() => {}' instead of 'markAsDone(id)' to prevent react from immediately calling this function, which would cause an infinite loop of re-renders */}
            <Badge onClick={() => markAsDone(id)} pill bg='success' className='float-end'>&#10003;</Badge>
            <Badge onClick={() => deleteTodo(id)} pill bg='danger' className='float-end mx-2'>&#10007;</Badge>
          </>
        )
      }
    </ListGroup.Item>
  )
}

export default TodoItem;