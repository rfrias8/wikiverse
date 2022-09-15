import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, fetchPage}) => {
	console.log(pages);
	return <>
		{Object.keys(pages).length > 0 && (
			pages.map((page, idx) => {
				return <Page page={page} key={idx} fetchPage={fetchPage} />
			})
		)}
	</>
} 