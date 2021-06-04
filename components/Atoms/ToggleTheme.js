export default function ToggleTheme({ onChange, defaultChecked }) {
	return (
		<div>
			<input
				type="checkbox"
				defaultChecked={defaultChecked}
				onChange={onChange}
			/>
		</div>
	);
}
