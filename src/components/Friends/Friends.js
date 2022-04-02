import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
	const [friends, setFriends] = useState([])
	useEffect(()=> {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => setFriends(data))
	}, []);
	return (
		<div>
			<h2>Hello Friends</h2>
			<p>How are you. <small>Parle kicu taka dar dis...{friends.length}</small> </p>
			{
				friends.map(friend => <Friend 
					friend={friend}
					key={friend.id}
					></Friend>)
			}
		</div>
	);
};

export default Friends;