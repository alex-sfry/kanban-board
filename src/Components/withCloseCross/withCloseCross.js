import React from 'react';
import css from './withCloseCross.module.css';

const withCloseCross = (Component) => {
	const newComponent = () => {
		return <Component>
			<span className={css.close}></span><span className={css.close}></span>
		</Component>
	}
	return newComponent;
}

export default withCloseCross;