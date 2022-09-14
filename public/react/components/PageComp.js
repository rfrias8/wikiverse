import React from 'react';
import { Page } from './Page';

export const PageComp = ({wikipage, setPage}) => {
	
	(wikipage ? console.log(wikipage) : null);


	return <>
		{
		Object.entries(wikipage).length > 0 ? 	
			<div>
				<h2>{wikipage.title}</h2>
				<p><strong>Author:</strong>{wikipage.author?.name}</p>
				<p>{wikipage.content}</p>
				<p><strong>Tags:</strong></p>
				{wikipage.tags.map((tag, idx) => (<p key={idx}>{tag.name}</p>))}
				<button onClick={() => setPage({})}>Back</button>
			</div>
		: null
		}
	</>
} 