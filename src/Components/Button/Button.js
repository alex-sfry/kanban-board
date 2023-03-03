import React from 'react';
import css from './Button.module.css';
import withCloseCross from '../withCloseCross'

export const Button = ({ children, btnClass, disabled, handleClick, type }) => {
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

const ButtonCloseWindow = ({ children }) => {
	return (		
		<button className={css.btnClose}>
			{children}
		</button>		
	)
}

export const Close = withCloseCross(ButtonCloseWindow)

