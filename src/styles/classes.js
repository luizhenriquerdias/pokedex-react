import { css } from '@emotion/react';

export const Flex = css`
	display: flex;
	flex-wrap: wrap;
`;

export const AlignCenter = css`
	align-items: center;
`;

export const JustifyCenter = css`
	justify-content: center;
`;

export const SpaceBetween = css`
	justify-content: space-between;
`;

export const SpaceAround = css`
	justify-content: space-around;
`;

export const FlexCenter = css([Flex, AlignCenter, JustifyCenter]);

export const Poppins = css`
	font-family: 'Poppins', sans-serif;
`;

export const Montserrat = css`
	font-family: 'Montserrat Alternates', sans-serif;
`;

export const TextBold = css`
	font-weight: bold;
`;

export const AbsuluteCenter = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Pointer = css`
	cursor: pointer;
`;

export const MarginTop = px => css`
	margin-top: ${px}px;
`;

export const MarginBottom = px => css`
	margin-bottom: ${px}px;
`;

export const MarginLeft = px => css`
	margin-left: ${px}px;
`;

export const MarginRight = px => css`
	margin-right: ${px}px;
`;

export const MarginX = px => css`
	${MarginLeft(px)};
	${MarginRight(px)};
`;

export const MarginY = px => css`
	${MarginTop(px)};
	${MarginBottom(px)};
`;

export const MarginAll = px => css`
	${MarginX(px)};
	${MarginY(px)};
`;

export const PaddingTop = px => css`
	padding-top: ${px}px;
`;

export const PaddingBottom = px => css`
	padding-bottom: ${px}px;
`;

export const PaddingLeft = px => css`
	padding-left: ${px}px;
`;

export const PaddingRight = px => css`
	padding-right: ${px}px;
`;

export const PaddingX = px => css`
	${PaddingLeft(px)};
	${PaddingRight(px)};
`;

export const PaddingY = px => css`
	${PaddingTop(px)};
	${PaddingBottom(px)};
`;

export const PaddingAll = px => css`
	${PaddingX(px)};
	${PaddingY(px)};
`;

export const FullHeight = css`
	height: 100%;
`;

export const FullWidth = css`
	width: 100%;
`;

export const Fit = css`
	${FullHeight};
	${FullWidth}
`;

export const PokemonGrid = css`
	${Flex};
	${JustifyCenter};
	> div {
		flex: 1 1 175px;
	}
`;
