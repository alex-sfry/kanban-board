import React from 'react';
import css from './MoveTask.module.css';

function MoveTask({ updateTasks, optionList, listTasks, setButtonClicked }) {
	const handleChange = (e) => {
		const newTask = optionList.issues.find(issue => issue.name === e.target.value)
		const updatedListTasks = {
			title: listTasks.title,
			issues: [...listTasks.issues, newTask]
		}
		const updatedPrevListTasks = {
			title: optionList.title,
			issues: [...optionList.issues].filter(issue => issue.name !== e.target.value)
		}
		updateTasks(updatedListTasks, updatedPrevListTasks)
		setButtonClicked(false)
	}

	return (
		<select name='select' id='select' className={css.select} onChange={handleChange}>
			<option value=''></option>
			{optionList.issues.map(issue => {
				return <option
					key={issue.id}
					value={issue.name}
					className={css.option}>
					{issue.name}
				</option>
			})}
		</select>
	)
}

export default MoveTask;