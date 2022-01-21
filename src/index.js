import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

var taskItems = new Array(
	"Follow Edukasyon.ph on Facebook",
	"Follow AWS Siklab Pilipinas on Facebook",
	"Follow Zuitt Coding BootCamp on Facebook"
	);

const Task = (props) => {
	return <li className="tasks-item">Follow {props.taskName} on Facebook</li>
}

const TaskList = () => {

	return(
			<div>
				<input className="task-input" />
				<ul>
					{
						taskItems.map((item, index) => {
							console.log(item);
							return <Task key={index} taskName={item} />
						})
					}
				</ul>
			</div>
		);
}

const App = () =>{

	const paraStyle = {
		"marginBottom": "15px"
	};

	return(
			<div className="app">
				<header className="app-header">
					<h1>My Amazing ToDo-List App</h1>
					<p style={paraStyle}>The most simple and amazing todo-list React app.</p>	

					<TaskList />

				</header>
			</div>
		);
}

const HelloWorld = () => {
	return <h1>Hello World!</h1>
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);