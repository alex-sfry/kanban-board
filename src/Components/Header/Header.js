import React from 'react';
import css from './Header.module.css';

const Header = props => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<div className={css.logo}>Awesome Kanban Board</div>
				<div className={css.login}></div>
			</div>
		</header>
	)
}

export default Header;