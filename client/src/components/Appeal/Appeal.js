import React from 'react';
import { Button } from 'antd';
import { QuestionCircleOutlined, AimOutlined } from '@ant-design/icons';
import Question from './Questions/Question';

import './Appel.scss';



const questions = [
	{},
	{
		title: 'Обращение по проблемам с постаматами',
		subtitle: 'Адрес постамата',
		inputs: [
			{
				icon: <AimOutlined />,
				placeholder: '3-я Хорошёвская ул., 21А, Москва'
			}
		],
		isThereInput: false
	},
	{
		title: 'map',
		subtitle: 'map',
		placeholder: 'map'
	},
	{
		title: 'Проблема, с которой столкнулись',
		subtitle: 'Адрес постамата',
		inputs: [
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Неудачная попытка доставки'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Постамат не может принять посылку из-за ограниченного размера ячейки'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Постамат не работает из-за технических проблем'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Постамат работает только в определённое время, что неудобно для получения посылки'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Неудобное расположение'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Нет возможности выбора ячейки'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Проблемы с доступом: невозможно получить доступ к своей посылке'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Постомат не обеспечивает достаточной безопасности для хранения посылок'
			},
			{
				icon: <QuestionCircleOutlined />,
				placeholder: 'Другое'
			},
		],
		isThereInput: true
	},
	{
		title: '',
		subtitle: 'Ваше имя',
		inputs: [
			{
				icon: '',
				placeholder: 'Фамилия'
			},
			{
				icon: '',
				placeholder: 'Имя'
			},
			{
				icon: '',
				placeholder: 'Отчество (Если имеется)'
			}
		],
		isThereInput: false
	},
];




const Appeal = () => {
	const [currentStep, setCurrentStep] = React.useState(1);
	const [answers, setAnswers] = React.useState({
		adress: '',
		problem: '',
		fio: {
			surname: '',
			name: '',
			otch: ''
		},
		contacts: {
			tg: '',
			phone: '',
			email: ''
		}
	});

	const goToNext = (step) => {
		setCurrentStep(step);
	};

	const setNewAnswers = (answerz) => {
		setAnswers(answerz);
	};


	if (currentStep === 0) {
		return (
			<div className="Appeal" style={{backgroundImage: `url('/circle.png')`}}>
			<div className="logo" style={{backgroundImage: `url('/logoz.png')`}}></div>
				<div className="left">
					<div></div>
					<div className="leftContent">
						<h2>Tехническая поддержка для владельцев и пользователей постаматов</h2>
						<Button type="primary">Подать обращение</Button>
					</div>
					<div className="bottomer">
						<div className="bottomerLogo" style={{backgroundImage: `url('/logoz2.png')`}}></div>
						<p>Документация API</p>
						<p>О нас</p>
					</div>
				</div>
				<div className="right" style={{backgroundImage: `url('/appeal1.png')`}}></div>
			</div>
		)
	} else if (currentStep === 2) {
		return (
			<div className="map" style={{backgroundImage: `url('/map.png')`}}>
				<Button onClick={() => {setCurrentStep(currentStep + 1)}} type="primary">Следующий</Button>
			</div>
		)
	} else {
		return (
			<Question question={questions[currentStep]} index={currentStep} questionCount={questions.length} goToNext={goToNext} answerz={answers} setNewAnswers={setNewAnswers} />
		)
	}
};

export default Appeal;