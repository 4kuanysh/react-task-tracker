import PropTypes from 'prop-types'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
          {task.text} 
            <FaTimes style={{ color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.date}</p>
    </div>
  )
}

Task.defaultProps = {
  title: 'Task Tracker',
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Task