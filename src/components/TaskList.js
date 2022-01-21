import { useState } from 'react';
import ReactDOM from 'react-dom';


import Task from './Task';

var taskItems = new Array(
	"Follow Edukasyon.ph on Facebook",
	"Follow AWS Siklab Pilipinas on Facebook",
	"Follow Zuitt Coding BootCamp on Facebook"
	);

const TaskList = () => {

	const [taskValue, setTaskValue] = useState("Just Another Task");

	// console.log(taskValue);

	const inputChangeHandler = (e) => {
		setTaskValue(e.target.value);
	}

	return(
			<div>
				<input
				className="task-input"
				placeholder="Create new task"
				onChange={inputChangeHandler}
				/>
				<ul>
					{
						taskItems.map((item, index) => {
							return <Task key={index} taskName={item} />
						})
					}
				</ul>
			</div>
		);
}

export default TaskList