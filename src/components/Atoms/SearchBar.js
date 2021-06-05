import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FlexCenter } from '../../styles/classes';

const Container = css`
	background: white;
	height: 50px;
	border-radius: 16px;
	color: #aaa;
	box-shadow: 0 0 10px grey;
`;

const Icon = css`
	margin: 0 16px;
`;

const Input = css`
	height: 100%;
	background: transparent;
	font-size: 16px;
	border: none;
	width: 300px;
	outline: none;
`;

export default function SearchBar({ onSearch }) {
	const onInput = ({ target }) => {
		const { value } = target;
		(onSearch || (() => {}))(value);
	};
	return (
		<div css={css([FlexCenter, Container])}>
			<FontAwesomeIcon icon={faSearch} css={Icon} />
			<input placeholder="Pesquisar..." css={css([Input])} onInput={onInput} />
		</div>
	);
}
