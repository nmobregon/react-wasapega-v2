import React from "react";

export const Column = (props) => {

	return (
		<div className={props.className ? props.className : 'p-col'}>
			{props.children}
		</div>
	)
}