const generateHSL = (hue, saturation = 65, light = 50) => ({
	hue,
	saturation,
	light
});

const getHSL = type => {
	switch (type) {
		case 'normal':
			return generateHSL(39, 55, 69);
		case 'fighting':
			return generateHSL(58, 45);
		case 'flying':
			return generateHSL(25);
		case 'poison':
			return generateHSL(302, 75);
		case 'ground':
			return generateHSL(47, 48);
		case 'rock':
			return generateHSL(47, 10);
		case 'bug':
			return generateHSL(135, 40);
		case 'ghost':
			return generateHSL(292, 23);
		case 'steel':
			return generateHSL(310, 5);
		case 'electric':
			return generateHSL(59, 70, 60);
		case 'psychic':
			return generateHSL(308, 72);
		case 'ice':
			return generateHSL(188, 72);
		case 'dragon':
			return generateHSL(238, 85);
		case 'dark':
			return generateHSL(39, 28, 17);
		case 'fairy':
			return generateHSL(303, 50, 76);
		case 'unknown':
			return generateHSL(303, 50, 10);
		case 'shadow':
			return generateHSL(303, 50, 10);
		case 'grass':
			return generateHSL(112, 62);
		case 'water':
			return generateHSL(190);
		case 'fire':
			return generateHSL(30, 100);
		default:
			return generateHSL(0);
	}
};

const generateHslStr = (hue, saturation, light) =>
	`hsl(${hue}, ${saturation}%, ${light}%)`;

const getBackgroundStr = ({ hue, saturation, light }) =>
	`linear-gradient(135deg, ${generateHslStr(
		hue,
		saturation,
		light
	)}, ${generateHslStr(hue, saturation, light + 10)})`;

export const getColor = (theme, type) => {
	let hsl = getHSL(type);
	if (theme.name === 'light') hsl = generateHSL(255, 255, 255);
	return generateHslStr(hsl.hue, hsl.saturation, hsl.light);
};

export const getBackgroundColorByType = (theme, type) => {
	let hsl = getHSL(type);
	if (theme.name === 'dark') hsl = generateHSL(0, 0, 26);
	return getBackgroundStr(hsl);
};

export const getPokemonType = pokemon => pokemon.types[0].type.name;

export const getPokemonName = pokemon =>
	pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

export const getPokemonId = pokemon =>
	`#${String(pokemon.id).padStart(4, '0')}`;

export const getPokemonSprite = pokemon =>
	pokemon.sprites.other['official-artwork'].front_default;
