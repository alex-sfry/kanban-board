import React from 'react';
import css from './Button.module.css';

export const Button = ({ children, btnClass, disabled, handleClick = null, type }) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${css.btn} ${css[btnClass]}`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}

