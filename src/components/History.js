import React, {memo, useContext, useState, useEffect} from 'react';
import MessageContext from './context/MessageContext';
import * as moment from 'moment';
import { Button } from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import { useTranslation } from 'react-i18next';

export const History = memo(({sendMessage})=>{

	const {history} = useContext(MessageContext);
	const [reversedHistory, setReversedHistory] = useState([]);
	const [visible, setVisible] = useState(false);
	const [t] = useTranslation();
	
	useEffect(()=>{
		if (history)
			setReversedHistory(history.reverse());
	}, [history])

	const footer = (
		<div>
			<Button label="Si" icon="pi pi-check" onClick={()=>setVisible(false)} />
			<Button label="No" icon="pi pi-times" onClick={()=>setVisible(false)} />
		</div>
	);
	
	return (
		<>
			<ul>
				{reversedHistory.map((m,i)=>(
					<li key={i} title={moment(m.date).format('DD/MM/YYYY HH:mm')} className="pointered">
						<span onClick={(e)=>sendMessage(e, m.phone, m.name, m.message, false)}>
							{m.name} {moment(m.date).fromNow()}
						</span> 
						<span className="pi pi-info" onClick={()=>setVisible(true)}></span>
					</li>
				))}
			</ul>
			<Dialog header="Numero valido" footer={footer} visible={visible} style={{width: '50vw'}} modal={true} onHide={()=>setVisible(false)}>
				{t('validNumberQuestion')}
			</Dialog>

		</>

	)

})