import { css } from '@emotion/react';
import { cloneElement, useState, forwardRef, useImperativeHandle } from 'react';
import {
	Pointer,
	Flex,
	SpaceAround,
	FullHeight,
	PaddingX,
	PaddingY
} from '../styles/classes';

const tabsHeight = 54;

const Styles = {
	Tabs: css`
		${Flex};
		${SpaceAround};
		height: ${tabsHeight}px;
	`,

	Tab: isActive => css`
		${Pointer};
		padding: 16px 24px;
		position: relative;

		${isActive &&
		css`
			&::after {
				position: absolute;
				content: '';
				height: 2px;

				width: calc(100% - 48px);
				bottom: 8px;
				background: #68c151;
			}
		`}
	`,

	TabContent: css`
		${PaddingY(8)}
		${PaddingX(32)}
		height: calc(100% - ${tabsHeight}px);
		overflow-y: auto;

		/* width */
		&::-webkit-scrollbar {
			width: 7px;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: #555;
			border-radius: 7px;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 7px;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: #f1f1f1;
		}
	`
};

export const Tabs = forwardRef(({ defaultActiveIndex, children }, ref) => {
	const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0);

	useImperativeHandle(ref, () => ({
		setActiveIndex
	}));

	const handleTabClick = tabIndex => {
		if (tabIndex !== activeIndex) setActiveIndex(tabIndex);
	};

	const cloneTabElement = (tab, index = 0) =>
		cloneElement(tab, {
			key: index,
			onClick: () => handleTabClick(index),
			tabIndex: index,
			isActive: index === activeIndex
		});

	const renderChildrenTabs = () => {
		if (!Array.isArray(children)) return cloneTabElement(children);
		return children.map(cloneTabElement);
	};

	const renderActiveTabContent = () => {
		if (children[activeIndex]) return children[activeIndex].props.children;
		return children.props.children;
	};

	return (
		<section css={FullHeight} ref={ref}>
			<div css={Styles.Tabs}>{renderChildrenTabs()}</div>
			<div css={Styles.TabContent}>{renderActiveTabContent()}</div>
		</section>
	);
});

export function Tab({ label, isActive, onClick }) {
	return (
		<a css={Styles.Tab(isActive)} onClick={onClick}>
			{label}
		</a>
	);
}
