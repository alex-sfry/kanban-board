import React, { useState } from 'react';
import css from './AddTask.module.css';
import { Button } from '../Button/Button';
import uniqid from 'uniqid';

function AddTask({ updateTasks, setButtonClicked, listTasks }) {
	const [title, setValue] = useState('')

	const handleChange = (e) => {
		setValue(e.target.value)		
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (title) {
			const updatedListTasks = {
				title: listTasks.title,
				issues: [...listTasks.issues, { id: uniqid(), name: title, description: '' }]
			}
			updateTasks(updatedListTasks)
		}
		setButtonClicked(false)
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input type='text' className={css.input} onChange={handleChange} value={title} placeholder='New task title... '></input>
			<Button
				type={'submit'}
				btnClass={'btnSubmit'}
				disabled={false}>
				Submit
			</Button>
		</form>
	)
}

export default AddTask;