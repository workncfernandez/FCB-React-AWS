import ReactDOM from 'react-dom';

import TaskList from './TaskList';

const Task = (props) => {
	return <li className="tasks-item">{props.taskName}</li>
}

export default Task