import { css, useTheme } from '@emotion/react';
import { Fit, FlexCenter } from '../styles/classes';
import Spinner from './Atoms/Spinner';

export default function Loading() {
	const theme = useTheme();

	return (
		<div css={css([Fit, FlexCenter])}>
			<Spinner fill={theme.colors.inverse} />
		</div>
	);
}
