import ReactDOM from 'react-dom';


import Task from './Task';

var taskItems = new Array(
	"Follow Edukasyon.ph on Facebook",
	"Follow AWS Siklab Pilipinas on Facebook",
	"Follow Zuitt Coding BootCamp on Facebook"
	);

const TaskList = () => {

	return(
			<div>
				<input className="task-input" />
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