import { css } from '@emotion/react';
import { useState } from 'react';

const Switch = css`
	display: inline-block;
	height: 1em;
	width: 2em;
	border-radius: 1em;

	input {
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
`;

const Input = css`
	opacity: 0;
`;

export default function ToggleTheme({ onChange, defaultChecked }) {
	const [swith, setSwitch] = useState(defaultChecked);
	const onSwitch = () => {
		setSwitch(!swith);
		onChange();
	};

	return (
		<label
			css={css([
				Switch,
				css`
					background: ${!swith ? '#bdb9a6' : '#68c151'};
				`
			])}
		>
			<input
				css={Input}
				type="checkbox"
				defaultChecked={defaultChecked}
				onChange={onSwitch}
			/>
			<div />
		</label>
	);
}
