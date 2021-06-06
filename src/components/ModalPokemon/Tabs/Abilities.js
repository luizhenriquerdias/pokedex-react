import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { fetchAbilityByName } from '../../../api';
import { MarginBottom, Poppins, TextBold } from '../../../styles/classes';
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
					<div css={css([Poppins, TextBold])}>
						{upperCaseFirstLetter(ability.name)}
					</div>
					<span>{getAbilityDescription(abilities[i])}</span>
				</div>
			))}
		</div>
	);
}
