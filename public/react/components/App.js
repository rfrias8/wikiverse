import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { PageComp } from './PageComp';
import { Form } from './Form';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState({});

	const [page, setPage] = useState({});

	const [addArticle, setAddArticle] = useState(false);

	const fetchPage = async (slug) =>{
	
  
	  
		  try {
			  const response = await fetch(`${apiURL}/wiki/${slug}`);
			  const data = await response.json();
			  setPage(data);
			  // console.log(data);
		  } catch (err) {
			  console.log("Oh no an error! ", err)
		  }
	}


	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, [page]);



	return (
		Object.entries(page).length > 0 ? <PageComp setPage={setPage} wikipage={page} />
		: addArticle ? <Form addArticle={addArticle}/> : 
		<main>	
			<div>
				<h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<PagesList pages={pages} fetchPage={fetchPage} /> 
				<button onClick={ () => setAddArticle(true)}>Add Article</button>
			</div>
		</main>
	)
}