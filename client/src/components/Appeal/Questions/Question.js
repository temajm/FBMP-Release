import React from 'react';
import { Input, Button, Progress, Radio, Space } from 'antd';


import './Question.scss';


const Question = ({question, index, questionCount, goToNext, answerz, setNewAnswers}) => {
	const { TextArea } = Input;

	const btnHandler = () => {
		goToNext(index + 1);
		
		switch (index) {
			case 1:
				answerz.adress = inputValues[0];
				setNewAnswers(answerz);
				break;
			case 3:
				answerz.problem = textAreaValue;
				break;
		}
		setInputValues([]);
		setTextAreaValue('');
	}

	const radioHandler = (e) => {
		setRadioActive(e.target.value);
	};

	const [inputValues, setInputValues] = React.useState([]);
	const [radioActive, setRadioActive] = React.useState(0);
	const [isTextAreaActive, setIsTextAreaActive] = React.useState(true);
	const [textAreaValue, setTextAreaValue] = React.useState('');


	if (index !== questionCount && index !== 3) {
		return (
			<div className="question">
				<div className="logo" style={{backgroundImage: `url('/logoz.png')`}}></div>
				<div className="chel" style={{backgroundImage: `url('/appeal1.png')`}}></div>
				<h1>{question.title}</h1>
				<div className="inpd">
					<h3 style={{display: 'flex', gap: '10px'}}><p style={{color: '#FF1935'}}>{index}.</p>{question.subtitle}</h3>
					{
						question.inputs.map((inp, j) => {
							return <Input onChange={(e) => {
								inputValues[j] = e.target.value;
								setInputValues(inputValues);
							}} value={inputValues[j]} size="large" prefix={inp.icon} style={{padding: '10px'}} placeholder={inp.placeholder} />
						})
					}
					<Button type='primary' onClick={() => {btnHandler()}}>Следующий</Button>
				</div>
				<Progress percent={Math.round(index / (questionCount) * 100)} />
			</div>
		)
	} else if (index === 3) {
		return (
			<div className="question">
				<div className="logo" style={{backgroundImage: `url('/logoz.png')`}}></div>
				<div className="chel" style={{backgroundImage: `url('/appeal1.png')`}}></div>
				<div className="inpd">
					<Radio.Group onChange={(e) => {
							radioHandler(e);
						}}
						value={radioActive}>
						<Space direction="vertical">
							{
								question.inputs.map((inp, j) => {
									return (
										<Radio.Button style={{padding: '10px', display: 'flex', alignItems: 'center'}} value={j} textd={inp.placeholder}
										onClick={
											(e) => {
												if (e.target.attributes.textd.value === 'Другое') {
													setIsTextAreaActive(false);
												} else {
													setIsTextAreaActive(true);
												}
											}
										}
										>{inp.placeholder}</Radio.Button>
									)
								})
							}
						</Space>
					</Radio.Group>
					<TextArea onChange={(e) => {setTextAreaValue(e.target.value)}} rows={4} disabled={isTextAreaActive}/>
					<Button type='primary' onClick={() => {btnHandler()}}>Следующий</Button>
				</div>
				<Progress percent={Math.round(index / (questionCount) * 100)} />
			</div>
		)
	} else {
		return (
			<div className='question'>
				<div className="logo" style={{backgroundImage: `url('/logoz.png')`}}></div>
				<div className="chel" style={{backgroundImage: `url('/appeal1.png')`}}></div>
				THE END
				<Progress percent={Math.round(index / (questionCount) * 100)} />
			</div>
		)
	}
};

export default Question;