// Write your code here

import './index.css'

const TodoItem = props => {
  const {tododetails, deleteTodo} = props
  const {title, id} = tododetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
