import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
	const {postid} = useParams();
	const [post, setPost] = useState({});
	useEffect(()=> {
		const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
		fetch(url)
		.then(res=> res.json())
		.then(data => setPost(data))
	},[postid]);
	return (
		<div>
			<h4>This is post details.{postid}</h4>
			<h5>{post.title}</h5>
			<p><small>{post.body}</small></p>
		</div>
	);
};

export default PostDetails;