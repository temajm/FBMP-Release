import './NavItem.scss';

const navItem = ({width, height, title, iconUrl}) => {

	return (
		<div className="item" style={{height: `${height}%`}}>
			<svg className="icon" style={{backgroundImage: `url(${iconUrl})`, color: 'black'}}></svg>
			<div className="title">{title}</div>
		</div>
	)
};

export default navItem;