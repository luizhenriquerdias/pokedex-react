import { createContext, useState } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(dark);
	const changeTheme = () => {
		setTheme(theme.name === 'dark' ? light : dark);
	};
	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
