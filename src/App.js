import React, {useState} from 'react';
import logo from './logo.png';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

import {Sender} from "./components/Sender"
import MessageContext from './components/context/MessageContext';
import { Column } from './components/common/Column';
import * as moment from 'moment';
import { History } from './components/History';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

	const [history, setHistory] = useState(()=>{
		const current = localStorage.getItem("messageHistory");
		console.log(current);
		if (current && current.length){
			return JSON.parse(current);
		}
		return [];
	});
	const [locale, setLocale] = useState("es");

	const { i18n } = useTranslation();

	const changeLocale = (lang)=>{
		i18n.changeLanguage(lang);
		setLocale(lang);
		moment.locale(lang);
	}

	const sendMessage = (event, num, to, message, save=true)=>{
		event.preventDefault();
		window.open(`https://wa.me/${num}?text=${message}`);
		if(save)
			setHistory((state)=>{
				const updatedHistory = [...state];
				updatedHistory.push({
					phone:num,
					name: to,
					message,
					date: new Date()
				});
				localStorage.setItem("messageHistory", JSON.stringify(updatedHistory));
				return updatedHistory;
			})
	};

  	return (
		<>
			<div className="App">
				<MessageContext.Provider value={{history:history, locale: locale}}>
					<Header changeLocale={changeLocale} logo={logo} />
					<div className="p-grid">
						<Column>
							<Sender sendMessage={sendMessage} />
						</Column>					
						<Column>
							<History sendMessage={sendMessage} />
						</Column>					
					</div>
				</MessageContext.Provider>
			</div>
			<Footer />
		</>
  	);
}

export default App;
