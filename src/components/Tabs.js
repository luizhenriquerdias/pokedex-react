import { css } from '@emotion/react';
import { cloneElement, useState } from 'react';
import { Pointer, Flex, SpaceAround } from '../styles/classes';

const Styles = {
	Tabs: css`
		${Flex};
		${SpaceAround};
	`,

	Tab: isActive => css`
		${Pointer};
		padding: 16px 24px;
		position: relative;

		${isActive &&
		css`
			&::after {
				position: absolute;
				display: block;
				content: '';
				height: 2px;

				width: calc(100% - 48px);
				bottom: 8px;
				background: #68c151;
			}
		`}
	`,

	TabContent: css`
		padding: 16px;
	`
};

export function Tabs({ defaultActiveIndex, className, children }) {
	const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0);

	const handleTabClick = tabIndex => {
		if (tabIndex !== activeIndex) setActiveIndex(tabIndex);
	};

	const cloneTabElement = (tab, index = 0) =>
		cloneElement(tab, {
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
		<section className={`tabs ${className}`}>
			<div css={Styles.Tabs}>{renderChildrenTabs()}</div>
			<div css={Styles.TabContent}>{renderActiveTabContent()}</div>
		</section>
	);
}

export function Tab({ label, isActive, onClick }) {
	return (
		<a css={Styles.Tab(isActive)} onClick={onClick}>
			{label}
		</a>
	);
}
