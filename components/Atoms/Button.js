import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme';

const Style = css`
	background: rgba(255, 255, 255, 0.4);
	border: none;
	cursor: pointer;
	padding: 8px 16px;
	border-radius: 8px;
	font-size: 1rem;
`;

const withIcon = css`
	background: none;
`;

export default function Button({ onClick, label, icon }) {
	const { theme } = useContext(ThemeContext);
	return (
		<button
			css={css([Style, icon ? withIcon : null])}
			type="button"
			onClick={onClick}
		>
			{icon ? (
				<FontAwesomeIcon color={theme.colors.inverse} icon={icon} />
			) : (
				label
			)}
		</button>
	);
}
