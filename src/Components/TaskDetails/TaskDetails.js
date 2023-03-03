import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import css from './TaskDetails.module.css'
import { Button, Close } from '../Button/Button'

const TaskDetails = ({ tasks, setTasks }) => {
	const [isActive, setIsActive] = useState(false)
	const [textValue, setTextValue] = useState('')
	const { id } = useParams()
	const defaultDescription = 'This task has no description'

	const getIssue = () => {
		const currentIssue = tasks.map((task, index) => {
			const findIssue = task.issues.find(issue => issue.id === id)
			//return array: 1st element - issue object, 2nd element - index of task list
			if (findIssue) return [findIssue, index]
			//return null for all other issues
			return null;
		})
		return currentIssue.find(item => item !== null)
	}
	const handleClick = (e) => {
		e.preventDefault()
		setIsActive(!isActive)
		const currentIssue = getIssue()[0]
		currentIssue.description ? setTextValue(currentIssue.description) : setTextValue(defaultDescription)
	}
	const onChange = (e) => {
		setTextValue(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const currentIssue = getIssue()
		currentIssue[0].description = textValue;

		const updatedTasks = tasks.map((item, index) => {
			if (index === currentIssue[1]) {
				item.issues[item.issues.indexOf(currentIssue[0])] = currentIssue[0]
			}
			return item
		})

		setTasks(updatedTasks)
		setIsActive(!isActive)
	}
	const renderConditions = () => {
		const currentIssue = getIssue()[0]
		if (!isActive) {
			return (
				<>
					<h2 className={css.title}>{getIssue()[0].name}</h2>
					<p className={css.description}>{currentIssue.description || defaultDescription}</p>
					<Button
						btnClass={'btnEdit'}
						disabled={false}
						handleClick={handleClick}
					>
						Edit...
					</Button>
					{/* <button className={css.btnEdit} onClick={handleClick}>Edit...</button> */}
				</>
			)
		} else {
			return (
				<form className={css.form} onSubmit={handleSubmit}>
					<label for='description' className={css.title}>{getIssue()[0].name}</label>
					<textarea name='description' className={css.editDescription} value={textValue} onChange={onChange}></textarea>
					<Button
						type={'submit'}
						btnClass={'btnSubmit'}
						disabled={false}>
						Submit
					</Button>
				</form>
			)
		}
	}
	console.log('details')
	return (
		<div className={isActive ? `${css.taskDetails} ${css.isEditActive}` : `${css.taskDetails}`}>			
			{renderConditions()}
			<Link to={'/'}>
				<Close />
			</Link>
		</div>
	)
}

export default TaskDetails;