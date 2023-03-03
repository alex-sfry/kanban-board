import React from 'react';
import css from './User.module.css';
import avatar from '../../Assets/user-avatar.svg';
import arrow from '../../Assets/Vector.svg';

const User = props => {
	return (
		<div className={css.user}>
			<div className={css.images}>
				<img src={avatar} className={css.avatar} alt='user avatar' />
				<img src={arrow} className={css.arrow} alt='arrow' />	
			</div>
			<div className={css.menu}>
				<ul className={css.userMenu}>
					<li className={css.menuItem}>Profile</li>
					<li className={css.menuItem}>Log Out</li>
				</ul>
			</div>		
			
		</div>
	)
}

export default User;