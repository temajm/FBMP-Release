import './Header.scss';
import NavItem from './NavItem/NavItem';
import { Tabs } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import React from 'react';

const Header = ({navItems}) => {
	const [currentTab, setCurrentTab] = React.useState(0);
	const onTabChange = (key) => {
		setCurrentTab(key);
	};

	const [isMenuShown, setIsMenuShown] = React.useState(false);

	return (
		<div className="header">
				<div className="left">
					<div className="logo"></div>
					
					<Tabs
						className='tabz'
						style={{height: '100%'}}
						tabBarStyle={{height: '100%'}}
						defaultActiveKey="0"
						onChange={onTabChange}
						items={navItems.map((item, i) => {
							const id = String(i+1);
							return {
								label: (
									<span style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
										<div style={{width: '16px', height: '16px', backgroundImage: `url('${item.iconUrl}')`, backgroundSize: 'cover'}}></div>
										{item.label}
									</span>
								),
								key: id,
							}
						})}
						/>
				</div>
				
				{
					isMenuShown ?
					<div className="menus">
						<div className="fill" onClick={() => setIsMenuShown(!isMenuShown)}></div>
						<div className="menushka">
							{
							navItems.map((item, index) => {
								return (
									<NavItem height={8} key={index} title={item.label} iconUrl={item.iconUrl} />
								)
							})
							}
						</div>
					</div>
					:
					<div></div>
				}

				<div className="right">
					<div className="info" style={{backgroundImage: `url(/quest.svg)`}}></div>
					<div className="notify" style={{backgroundImage: `url(/notify.svg)`}}></div>
					<div className="profile">
						<div className="profileIcon" style={{backgroundImage: `url(/avatar.png)`}}></div>
						<div className="profileName">Дединсайд Гуль</div>
					</div>
					<div className="openMenu" style={{backgroundImage: `url('/menu.svg')`}} onClick={() => setIsMenuShown(!isMenuShown)}></div>
				</div>
		</div>
	)
};

export default Header;