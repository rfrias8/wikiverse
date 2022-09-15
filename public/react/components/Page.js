import React, {useState, useEffect} from 'react';
import { PageComp } from "./PageComp"

export const Page = ({page, fetchPage}) => {
  
    return (<>
    <h3 onClick={() => fetchPage (page.slug)}>{page.title}</h3>
    
    </>)
} 

