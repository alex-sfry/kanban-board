import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
//import dataMock from './mock';

function App() {
	// empty localstorage --> initial state = array with list titles and empty issues arrays
	const initialState = [
		{
			title: 'backlog',
			issues: []
		},
		{
			title: 'ready',
			issues: []
		},
		{
			title: 'inProgress',
			issues: []
		},
		{
			title: 'finished',
			issues: []
		},
	]
	const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('tasks')) || initialState)
	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	return (	
		<div className='wrapper'>
			<Header />
			<Main tasks={tasks} setTasks={setTasks} />
			<Footer tasks={tasks} />
		</div>
	);
}

export default App;