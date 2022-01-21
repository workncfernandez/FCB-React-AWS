import ReactDOM from 'react-dom';

import TaskList from './TaskList';

const Task = (props) => {
	return <li className="tasks-item">Follow {props.taskName} on Facebook</li>
}

export default Task