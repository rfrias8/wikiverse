import React, {useState} from 'react';
import apiURL from '../api';

export const Form = ()  => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    // const [tags, setTags] = ("")

	const postPage = async (ev) =>{
        // ev.preventDefault();
        const articleData = {
            title,
            content,
            name: author,
            email
        };
        try {
            const response = await fetch(`${apiURL}/wiki/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                articleData // our data TO CREATE here
            )
            });
            const data = await response.json();
		} catch (err) {
			console.log("Please fill in all fields!", err)
		}
  	}

    return <>
        <form>
            <h1>WikiVerse</h1>
            <h2>Add a Page</h2>
            <input value={title} placeholder={"Title"} onChange={event => setTitle(event.target.value)}/>
            <input value={content} placeholder={"Article Content"}  onChange={event => setContent(event.target.value)}/>
            <input value={author} placeholder={"Author Name"}  onChange={event => setAuthor(event.target.value)}/>
            <input value={email} placeholder={"Author Email"}  onChange={event => setEmail(event.target.value)}/>
            <button onClick={postPage}>Create Page</button>
        </form>
    </>
}

