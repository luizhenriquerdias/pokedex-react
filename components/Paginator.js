import { css } from '@emotion/react';
import {
	faChevronLeft,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../providers/theme';
import { Flex, FlexCenter, Montserrat, TextBold } from '../styles/classes';
import Button from './Atoms/Button';

export default function Paginator({
	page,
	totalPages,
	nextPage,
	previousPage
}) {
	const { theme } = useContext(ThemeContext);
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
