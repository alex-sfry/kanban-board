import {React, useState, useRef, useEffect } from 'react';
import css from './User.module.css';
import avatar from '../../Assets/user-avatar.svg';
import arrow from '../../Assets/Vector.svg';

const User = props => {
	//refs for 'close menu if clicked outside' functionality
	const menuRef = useRef(null);
	const imagesRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const globalClickListener = window.addEventListener('click', handleGlobalClick)		
		return () => {
		  window.removeEventListener('click', globalClickListener);
		}
	  }, []);
	//close menu if clicked outside of menu
	function handleGlobalClick(e) {
		e.preventDefault()
		if (menuRef.current && !menuRef.current.contains(e.target) && !imagesRef.current.contains(e.target)) setIsOpen(false)
	}

	const handleClick = (e) => {
		e.preventDefault()		
		setIsOpen(!isOpen);		
	}
	
	return (
		<div className={css.user}>
			<div ref={imagesRef} className={css.images} onClick={handleClick}>
				<img src={avatar} className={css.avatar} alt='user avatar' />
				<img src={arrow} className={isOpen ? `${css.arrow} ${css.isActive}` : `${css.arrow}`} alt='arrow' />	
			</div>
			<ul ref={menuRef} className={isOpen ? `${css.userMenu} ${css.isOpen}` : `${css.userMenu}`}>
				<li className={css.menuItem}>Profile</li>
				<li className={css.menuItem}>Log Out</li>
			</ul>			
		</div>
	)
}

export default User;