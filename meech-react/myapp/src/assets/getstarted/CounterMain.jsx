import Counter from './Counter';
import axios from 'axios';
import React, {useState} from 'react';

function CounterMain() {
	const [quote, setQuote] = useState('');
	return (
		<div>
			<h1>Hello</h1>
			<Counter />

			<button
				onClick={() =>
					axios
						.get('https://api.kanye.rest')
						.then(result => setQuote(result.data.quote))
				}>
				Get a quote
			</button>
			<h1>{quote}</h1>
		</div>
	);
}

export default CounterMain;
