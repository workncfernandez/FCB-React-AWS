import { useState } from 'react';
import ReactDOM from 'react-dom';


import Task from './Task';

const TaskList = () => {

	var [taskItemsList, setTaskItemsList] = useState([
		"Follow Edukasyon.ph on Facebook",
		"Follow AWS Siklab Pilipinas on Facebook",
		"Follow Zuitt Coding BootCamp on Facebook"
	]);


	const [taskValue, setTaskValue] = useState("");

	console.log(taskValue);

	const inputChangeHandler = (e) => {
		setTaskValue(e.target.value);
	}

	const addTaskHandler = (e) => {
		setTaskItemsList([e.target.value, ...taskItemsList]);
		setTaskValue("");
	}

	return(
			<div>
				<input
				className="task-input"
				placeholder="Create new task"
				onChange={inputChangeHandler}
				onBlur={addTaskHandler}
				value={taskValue}
				/>
				<ul>
					{
						taskItemsList.map((item, index) => {
							return <Task key={index} taskName={item} />
						})
					}
				</ul>
			</div>
		);
}

export default TaskList