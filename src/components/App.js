import TaskList from './TaskList';


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

export default App