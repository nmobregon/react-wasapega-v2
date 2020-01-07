import React from 'react'
import { useTranslation } from 'react-i18next';
import { Column } from './common/Column';

const Header = ({changeLocale, logo}) => {

	const {t} = useTranslation();

	return (
		<header className="App-header">
			<div className="p-grid">
				<Column className="p-col-2 p-offset-10 pointered lang">
					<span onClick={()=>changeLocale('es')}>es</span> | 
					<span onClick={()=>changeLocale('en')}> en</span>
				</Column>
				<Column className="p-col-3 text-center">
					<img src={logo} className="App-logo" alt="logo" /><br/>
					<small>Wasapega v2</small>
				</Column>
				<Column className="p-col-9 text-middle">
					<h2>{t('title1')}</h2>
				</Column>
			</div>
		</header>
	);
}

export default React.memo(Header);