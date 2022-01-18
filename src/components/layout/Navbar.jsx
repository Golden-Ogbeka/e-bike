import React from 'react';
import { Box } from '@mui/material';
import Styles from '../../styles/Navbar.module.css';
import BrandLogo from '../../assets/brand/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<Box className={Styles.navbarContainer}>
			<Box className={Styles.navbarContentContainer}>
				<Link to='/' className={Styles.logoContainer}>
					<img alt='E-Bike' src={BrandLogo} />
				</Link>
				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'flex',
						},
					}}
				>
					<NavLink
						className={Styles.navLink}
						to='/'
						style={({ isActive }) => {
							return {
								color: isActive ? '#233348' : '#7D7987',
								fontWeight: isActive ? 'bold' : 'normal',
							};
						}}
					>
						Product
					</NavLink>
					<NavLink
						className={Styles.navLink}
						to='/bikeType'
						style={({ isActive }) => {
							return {
								color: isActive ? '#233348' : '#7D7987',
								fontWeight: isActive ? 'bold' : 'normal',
							};
						}}
					>
						Bike Type
					</NavLink>
					<NavLink
						className={Styles.navLink}
						to='/about'
						style={({ isActive }) => {
							return {
								color: isActive ? '#233348' : '#7D7987',
								fontWeight: isActive ? 'bold' : 'normal',
							};
						}}
					>
						About us
					</NavLink>
					<NavLink
						className={Styles.navLink}
						to='/testimonials'
						style={({ isActive }) => {
							return {
								color: isActive ? '#233348' : '#7D7987',
								fontWeight: isActive ? 'bold' : 'normal',
							};
						}}
					>
						Testimonials
					</NavLink>
					<NavLink
						className={Styles.navLink}
						to='/contact'
						style={({ isActive }) => {
							return {
								color: isActive ? '#233348' : '#7D7987',
								fontWeight: isActive ? 'bold' : 'normal',
								marginRight: 0,
							};
						}}
					>
						Contact
					</NavLink>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
