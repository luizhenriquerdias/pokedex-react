import { css, useTheme } from '@emotion/react';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FlexCenter, Montserrat, TextBold } from '../styles/classes';
import Button from './Atoms/Button';

export default function Paginator({
	page,
	totalPages,
	nextPage,
	previousPage
}) {
	const theme = useTheme();
	return (
		<div css={css([FlexCenter])}>
			<Button icon={faChevronLeft} onClick={previousPage} size="2x" />
			<span
				css={css([
					Montserrat,
					TextBold,
					css`
						color: ${theme.colors.inverse};
					`
				])}
			>
				{`${page}/${totalPages}`}
			</span>
			<Button icon={faChevronRight} onClick={nextPage} size="2x" />
		</div>
	);
}
