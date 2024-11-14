import React from 'react';
import Jokes from './Jokes';

const DadJokesMain = () => {
	const dadJokes = [
		{
			joke: 'I used to be a banker, but then I lost interest',
			rating: 3
		},
		{
			joke: 'I told my wife she was drawing her eyebrows too high. She looked surprised.',
			rating: 4
		}
	];

	return (
		<div>
			<h1>Dad Jokes</h1>
			<p>
				{dadJokes.map(({joke, rating}, index) => (
					<Jokes joke={joke} rating={rating} />
				))}
			</p>
		</div>
	);
};

export default DadJokesMain;
