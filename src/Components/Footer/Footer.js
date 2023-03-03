import React from 'react';
import css from './Footer.module.css'
import { LIST_TYPES } from '../../config'

const Footer = ({ tasks }) => {
	const backlogCount = tasks.find(list => list.title === LIST_TYPES.BACKLOG).issues.length
	const finishedCount = tasks.find(list => list.title === LIST_TYPES.FINISHED).issues.length

	return (
		<footer className={css.footer}>
			<div className={css.container}>
				<div className={css.counter}>
					<p>Active tasks: {backlogCount}</p>
					<p>Finished tasks: {finishedCount}</p>
				</div>
				<p>Kanban board by AlexT, 2023</p>
			</div>
		</footer>
	)
}

export default Footer;