import { css } from '@emotion/react';

const cssBody = css`
	height: 60%;
	background: black;
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;
	position: absolute;
	z-index: 1;
	bottom: 0;
	left: 0;
	right: 0;
`;

export default function Body() {
	return <div css={cssBody}>oi</div>;
}
