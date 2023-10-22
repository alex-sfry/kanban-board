import css from './LinkButton.module.css';
import { Link } from 'react-router-dom'


const LinkButton = ({ children, route, variant }) => {
    const variants = {
        crossLarge: `${css.btn} ${css.crossLarge}`
    }
    

	return (
        <div className={variants[`${variant}`]} >                       
            <Link to={route} >{children}</Link>
        </div>
		
	)
}

export default LinkButton