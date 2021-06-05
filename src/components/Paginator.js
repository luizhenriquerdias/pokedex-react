import { css, useTheme } from '@emotion/react';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FlexCenter, Montserrat, TextBold } from '../styles/classes';
import Button from './Atoms/Button';

const Styles = {
	Text: theme => css`
		${TextBold};
		${Montserrat};
		color: ${theme.colors.inverse};
	`
};

export default function Paginator({
	page,
	totalPages,
	nextPage,
	previousPage
}) {
	const theme = useTheme();
	return (
		<div css={FlexCenter}>
			<Button icon={faChevronLeft} onClick={previousPage} size="2x" />
			<span css={Styles.Text(theme)}>{`${page}/${totalPages}`}</span>
			<Button icon={faChevronRight} onClick={nextPage} size="2x" />
		</div>
	);
}
