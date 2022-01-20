import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

function App(){
	return(
			<div className="app">
				<header className="app-header">
					<h1>My Amazing ToDo-List App</h1>
					<p>The most simple and amazing todo-list React app.</p>
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