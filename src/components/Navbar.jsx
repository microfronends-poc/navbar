import React from 'react';
import { Link } from '@reach/router';
import { links } from './links';

const Navbar = () => (
	<div className='navbar'>
		{links.map((link) => {
			return (
				<Link key={link.href} className='nav-link' to={link.href}>
					{link.name}
				</Link>
			);
		})}
	</div>
);

export default Navbar;
