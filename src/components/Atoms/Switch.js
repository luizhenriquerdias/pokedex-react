import styled from '@emotion/styled';
import { useState } from 'react';

const Styles = {
	Label: styled.label`
		display: inline-block;
		height: 1em;
		width: 2em;
		border-radius: 1em;
		background: ${({ checked }) => (checked ? '#68c151' : '#bdb9a6')};

		input {
			opacity: 0;
			cursor: pointer;
			position: absolute;
			opacity: 0;
			width: 100%;
			height: 100%;
			z-index: 5;
		}

		div {
			height: 1em;
			width: 1em;
			border-radius: 1em;
			background: #fff;
			box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
			-webkit-transition: all 300ms;
			-moz-transition: all 300ms;
			transition: all 300ms;
		}

		input:checked + div {
			-webkit-transform: translate3d(100%, 0, 0);
			-moz-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
		}
	`
};

export default function Switch({ onChange, defaultChecked }) {
	const [checked, setChecked] = useState(defaultChecked);
	const onSwitch = () => {
		setChecked(!checked);
		onChange();
	};

	return (
		<Styles.Label checked={checked}>
			<input
				type="checkbox"
				defaultChecked={defaultChecked}
				onChange={onSwitch}
			/>
			<div />
		</Styles.Label>
	);
}
