import React from 'react';
import { Link } from 'react-router-dom';
import CustomeLink from '../CustomeLink/CustomeLink';

const Header = () => {
	return (
		<div>
      		<h1>Welcome to my fancy routing website!!!</h1>
			<nav>
				<CustomeLink to="/">Home</CustomeLink>
				<CustomeLink to="/friends">Friends</CustomeLink>
				<CustomeLink to="/posts">Posts</CustomeLink>
				<CustomeLink to="/about">about</CustomeLink>
			</nav>
		</div>
	);
};

export default Header;