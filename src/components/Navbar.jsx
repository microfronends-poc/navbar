import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { links } from './links';

const StyledNavbar = styled.div`
	background-color: lightgreen;
`;

const Navbar = () => (
	<StyledNavbar>
		{links.map((link) => {
			return (
				<Link key={link.href} className='nav-link' to={link.href}>
					{link.name}
				</Link>
			);
		})}
	</StyledNavbar>
);

export default Navbar;
