import React from 'react';

const Jokes = ({joke, rating}) => {
	let stars = '';
	for (let i = 0; i < 5; i++) {
if(i < rating){
stars +=  }}
	return (
		<div className='jokes'>
			<div>{joke}</div>
			<div>{stars}</div>
		</div>
	);
};

export default Jokes;
