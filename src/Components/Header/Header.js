import React from 'react';
import css from './Header.module.css';
import User from '../User';

const Header = props => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<div className={css.logo}>Awesome Kanban Board</div>
				<User />
			</div>
		</header>
	)
}

export default Header;