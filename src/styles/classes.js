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
