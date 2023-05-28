import React from 'react';
import { Tabs, DatePicker } from 'antd';
import ApexCharts from 'apexcharts';

import './Dashboard.scss';

const { RangePicker } = DatePicker;

const navItems = [
	{
		key: 0,
		label: 'День',
	},
	{
		key: 1,
		label: 'Неделя',
	},
	{
		key: 2,
		label: 'Месяц',
	},
];






const Dashboard = () => {
	const [obrRatingCurrentTab, obrRatingSetCurrentTab] = React.useState(0);
	const onTabChange1 = (key) => {
		obrRatingSetCurrentTab(key);
	};

	const [shareOfHitsCurrentTab, setshareOfHitsCurrentTab] = React.useState(0);
	const onTabChange2 = (key) => {
		setshareOfHitsCurrentTab(key);
	};

	return (
		<div className="dashboard">
			<div className="left">
				<div className="obrRating">
					<div className="obrRatingHeader">
						<Tabs
							className='tabz'
							style={{height: '100%'}}
							tabBarStyle={{height: '100%'}}
							defaultActiveKey="0"
							onChange={onTabChange1}
							items={navItems.map((item, i) => {
								const id = String(i+1);
								return {
									label: (
										<span style={{display: 'flex', alignItems: 'center'}}>
											{item.label}
										</span>
									),
									key: id,
								}
							})}
						/>
						<RangePicker />
					</div>
					<div className="obrRatingContent">
						
					</div>
				</div>
				<div className="map" style={{backgroundImage: `url('/map.png')`}}>
					<div className="currentPostamat">

					</div>
				</div>
			</div>
			<div className="right">
				<div className="overall">
					
				</div>

				<div className="shareOfHits">
					<div className="shareOfHitsHeader">
						Доля обращений
						<Tabs
							className='tabz'
							style={{height: '100%'}}
							tabBarStyle={{height: '100%'}}
							defaultActiveKey="0"
							onChange={onTabChange2}
							items={navItems.map((item, i) => {
								const id = String(i+1);
								return {
									label: (
										<span style={{display: 'flex', alignItems: 'center'}}>
											{item.label}
										</span>
									),
									key: id,
								}
							})}
						/>
					</div>
					<div className="shareOfHitsContent">
						<ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
					</div>
				</div>
			</div>
		</div>
	)
};

export default Dashboard;