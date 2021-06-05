import { css, useTheme } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = {
	Button: icon => css`
		border: none;
		cursor: pointer;
		z-index: 500;
		padding: 8px 16px;
		position: relative;
		border-radius: 8px;
		font-size: 1rem;
		background: ${icon ? 'none' : 'rgba(255, 255, 255, 0.4)'};
	`
};

export default function Button({ onClick, label, icon, size }) {
	const theme = useTheme();
	return (
		<button css={Styles.Button(icon)} type="button" onClick={onClick}>
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
