import { useEffect, useState } from 'react';
import { fetchAbilityByName } from '../../../api';
import { MarginBottom } from '../../../styles/classes';
import {
	getAbilityDescription,
	upperCaseFirstLetter
} from '../../../util/functions';
import Loading from '../../Loading';

export default function Abilities({ pokemon }) {
	const [abilities, setAbilities] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(async () => {
		const responses = await Promise.all(
			pokemon.abilities.map(({ ability }) => fetchAbilityByName(ability.name))
		);
		setLoading(false);
		setAbilities(responses);
	}, []);
	return loading ? (
		<Loading />
	) : (
		<div>
			{pokemon.abilities.map(({ ability, slot }, i) => (
				<div css={MarginBottom(16)} key={slot}>
					<h3>{upperCaseFirstLetter(ability.name)}</h3>
					<span>{getAbilityDescription(abilities[i])}</span>
				</div>
			))}
		</div>
	);
}
