import { fetchAbilityByName } from '../../../api';
import { MarginBottom } from '../../../styles/classes';
import {
	getAbilityDescription,
	upperCaseFirstLetter
} from '../../../util/functions';

export default function Abilities({ pokemon }) {
	const abilities = pokemon.abilities.map(({ ability }) =>
		fetchAbilityByName(ability.name)
	);
	return (
		<div>
			{pokemon.abilities.map(({ ability, slot }, i) => (
				<div css={MarginBottom(16)} key={slot}>
					<h3>{upperCaseFirstLetter(ability.name)}</h3>
					<span>{getAbilityDescription(abilities[i].data)}</span>
				</div>
			))}
		</div>
	);
}
