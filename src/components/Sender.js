import React, {memo} from 'react';
import { useForm } from '../hooks/useForm';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

import {Column} from './common/Column';
import { useTranslation } from 'react-i18next';
import { CountryCombo } from './CountryCombo';



export const Sender = memo(({sendMessage}) => {

	const [form, handleChanges] = useForm({country: undefined, phone: '', name: '', message: ''});
	const {t} = useTranslation();

	return (
		<form onSubmit={(e)=>sendMessage(e, form.country+form.phone, form.name, form.message)} className="sender-form">
			<Column className="p-col-6 p-offset-3">
				<CountryCombo handleChanges={handleChanges} form={form}/>
			</Column><br/>
			<Column className="p-col-6 p-offset-3">
				<span className="p-float-label">
					<InputText name="phone" value={form.phone} onChange={handleChanges} />
					<label htmlFor="in">{t('phoneNumber')}</label>
				</span>
			</Column><br/>
			<Column className="p-col-6 p-offset-3">
				<span className="p-float-label">
					<InputText name="name" value={form.name} onChange={handleChanges} />
					<label htmlFor="name">{t('name')}</label>
				</span>
			</Column><br/>
			<Column className="p-col-6 p-offset-3">
				<span className="p-float-label">
					<InputTextarea rows={5} cols={30}  name="message" onChange={handleChanges} value={form.message}/>
					<label htmlFor="in">{t('message')}</label>
				</span>
			</Column><br/>
			<Column className="p-col-6 p-offset-3">
				<Button label={t('send')} icon="pi pi-check" iconPos="right" />
			</Column>
		</form>
	)
});