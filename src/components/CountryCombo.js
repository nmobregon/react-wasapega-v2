import React, {memo, useEffect, useState} from 'react';

import {Dropdown} from 'primereact/dropdown';
import { useTranslation } from 'react-i18next';

const selectize = (countries)=>{
	return countries && countries.map(c=>{return {
		"label": `${c.name} (${c.callingCodes[0]})` ,
		"value": c.callingCodes[0]
	}});
}

export const CountryCombo = memo(({handleChanges, form}) => {

	const [countries, setCountries] = useState([]);
	const {t} = useTranslation();
	
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(()=>{
		console.log("effect");
		const load = async ()=>{
			try{
				setLoading(true);
				const ipCliente = await fetch("http://ip-api.com/json?fields=countryCode").then(r=>r.json());
				const countriesArr = await fetch("https://restcountries.eu/rest/v2/all?fields=name;callingCodes;alpha2Code").then(r=>r.json());
				setCountries(countriesArr);
				form.country = countriesArr.find(c=>c.alpha2Code === ipCliente.countryCode).callingCodes[0];
				setLoading(false);
			}catch(e){
				setLoading(false);
				setError(true);
			}
		};
		load();
	}, []);

	return (
		<>
			{ (loading) && <pre>{t('loading')}...</pre> }
			{ (error) && <h3>{t('paisesError')}</h3> }
			{ countries && <Dropdown name="country" value={form.country} options={selectize(countries)} onChange={handleChanges} placeholder={t("selectCountry")}/>}
		</>
	);

});

