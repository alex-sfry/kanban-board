import React from 'react';
import css from './Board.module.css';
import { LIST_TYPES, LIST_TITLES } from '../../config'
import List from '../List';

const Board = ({ tasks, setTasks }) => {
	const updateTasks = (updatedListTasks, updatedPrevListTasks) => {
		const updatedListIndex = tasks.findIndex(task => task.title === updatedListTasks.title)
		const updatedTasks = tasks.map((item, index) => {
			if (index === updatedListIndex) {
				return updatedListTasks;
			}
			if (index === updatedListIndex - 1) {
				return updatedPrevListTasks;
			}
			return item
		})
		setTasks(updatedTasks)
	}

	return (
		<div className={css.board}>
			{Object.values(LIST_TYPES).map(type => {
				const currListIndex = tasks.findIndex(item => item.title === type)
				return (
					<List
						key={type}
						title={LIST_TITLES[type]}
						listTasks={tasks.find(item => item.title === type)}
						//if localstorage is empty prevListTasks is the same as listTasks --> both are empty
						prevListTasks={tasks[currListIndex - 1] || tasks[currListIndex]}
						updateTasks={updateTasks}
					/>
				)
			})}
		</div>
	)
}

export default Board;