import React from 'react';

export const Page = ({page, fetchPage}) => {
    return <h3 onClick={() => fetchPage (page.slug)}>{page.title}</h3>
} 

