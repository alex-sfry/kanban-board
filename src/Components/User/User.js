import { React, useState } from 'react';
import css from './User.module.css';
import avatar from '../../Assets/user-avatar.svg';
import arrow from '../../Assets/Vector.svg';

const User = props => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e) => {
		e.preventDefault()
		setIsOpen(!isOpen);
	}

	return (
		<div className={css.user}>
			<div className={css.images} onClick={handleClick}>
				<img src={avatar} className={css.avatar} alt='user avatar' />
				<img src={arrow} className={isOpen ? `${css.arrow} ${css.isActive}` : `${css.arrow}`} alt='arrow' />
			</div>
			<ul className={isOpen ? `${css.userMenu} ${css.isOpen}` : `${css.userMenu}`}>
				<li className={css.menuItem}>Profile</li>
				<li className={css.menuItem}>Log Out</li>
			</ul>
		</div>
	)
}

export default User;