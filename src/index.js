import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

function App(){

	const paraStyle = {
		"marginBottom": "15px"
	};

	return(
			<div className="app">
				<header className="app-header">
					<h1>My Amazing ToDo-List App</h1>
					<p style={paraStyle}>The most simple and amazing todo-list React app.</p>

					<ul>
						<li className="tasks-item">Follow Edukasyon.ph on Facebook</li>
						<li className="tasks-item">Follow AWS Siklab Pilipinas Facebook</li>
						<li className="tasks-item">Follow Zuitt Coding BootCamp on Facebook</li>
					</ul>	
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