import React from 'react';
import apiURL from '../api';

export const PageComp = ({wikipage, setPage}) => {
	// (wikipage ? console.log(wikipage) : null);

	const deletePage = async (slug) =>{
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`, {
			method: "DELETE",
			});
			const data = await response.json();
			setPage({});
		} catch (err) {
			console.log("Please fill in all fields!", err)
		}
}
	return <>
		{Object.entries(wikipage).length > 0 ? 	
			<>
				<h2>{wikipage.title}</h2>
				<p><strong>Author:</strong>{wikipage.author?.name}</p>
				<p>{wikipage.content}</p>
				<p><strong>Tags:</strong></p>
				{wikipage.tags.map((tag, idx) => (<p key={idx}>{tag.name}</p>))}
				<button onClick={() => setPage({})}>Back</button>
				<button onClick={() => deletePage(wikipage.slug)}>Delete</button>
			</>
		: null
		}
	</>
} 