import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './List.module.css';
import { Button } from '../Button/Button';
import image from '../../Assets/plus.svg';
import MoveTask from '../MoveTask';
import AddTask from '../AddTask';

const List = ({ title, listTasks, prevListTasks, updateTasks }) => {
	const [isButtonClicked, setButtonClicked] = useState(false)
	const btnDisabled = listTasks.title !== 'backlog' && !prevListTasks.issues.length ? true : false
	
	const handleClick = (e) => {
		e.preventDefault()
		console.log('click')
		setButtonClicked(!isButtonClicked)
	}
	const listControls = () => {
		if (isButtonClicked && title === 'Backlog')
			return <AddTask
				listTasks={listTasks}
				updateTasks={updateTasks}
				setButtonClicked={setButtonClicked}
			/>
		if (isButtonClicked && title !== 'Backlog')
			return <MoveTask
				updateTasks={updateTasks}
				optionList={prevListTasks}
				listTasks={listTasks}
				setButtonClicked={setButtonClicked}
			/>
		return (
			<Button
				btnClass={'btnAdd'}
				disabled={btnDisabled}
				handleClick={handleClick}>
				<img src={image} className={css.icon} alt='icon' /> Add card
			</Button>
		)
	}

	return (
		<div className={css.container}>
			<div className={css.card}>
				<h2 className={css.listTitle}>{title}</h2>
				<ul className={css.list}>
					{listTasks.issues.map(issue => {
						return (
							<Link to={`/tasks/${issue.id}`} key={issue.id}>
								<li className={css.listItem}>{issue.name}</li>
							</Link>
						)
					})}
				</ul>
				{listControls()}
			</div>			
		</div>
	)
}

export default List;