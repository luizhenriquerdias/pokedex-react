const getHsl = hue => `hsl(${hue}, 65%, 60%)`;

const getColorByType = type => {
	switch (type) {
		case 'grass':
			return getHsl(166);
		case 'water':
			return getHsl(190);
		case 'fire':
			return getHsl(25);
		default:
			return 'white';
	}
};

export const getColor = (theme, type) => {
	if (theme.name === 'light') return 'white';
	return getColorByType(type.name);
};

export const getBackgroundStr = hue =>
	`background: linear-gradient(135deg, hsl(${hue}, 65%, 60%), hsl(${hue}, 65%, 50%))}`;

export const getBackgroundColorByType = (theme, type) => {
	if (theme.name === 'dark') return 'background: #434343';
	switch (type) {
		case 'grass':
			return getBackgroundStr(166);
		case 'water':
			return getBackgroundStr(190);
		case 'fire':
			return getBackgroundStr(25);
		default:
			return getBackgroundStr(0);
	}
};
