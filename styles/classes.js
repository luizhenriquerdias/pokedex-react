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
