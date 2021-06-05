import { css, useTheme } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Style = css`
	background: rgba(255, 255, 255, 0.4);
	border: none;
	cursor: pointer;
	z-index: 500;
	padding: 8px 16px;
	position: relative;
	border-radius: 8px;
	font-size: 1rem;
`;

const withIcon = css`
	background: none;
`;

export default function Button({ onClick, label, icon, size }) {
	const theme = useTheme();
	return (
		<button
			css={css([Style, icon ? withIcon : null])}
			type="button"
			onClick={onClick}
		>
			{icon ? (
				<FontAwesomeIcon
					color={theme.colors.inverse}
					icon={icon}
					size={size || '1x'}
				/>
			) : (
				label
			)}
		</button>
	);
}
