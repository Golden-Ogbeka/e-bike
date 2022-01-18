import { Box } from '@mui/material';
import React from 'react';
import Styles from '../../styles/Footer.module.css';
import DotsIcon from '../../assets/icons/dots4.svg';
import BrandLogo from '../../assets/brand/logo2.svg';

function Footer() {
	return (
		<Box className={Styles.footerContainer}>
			<img src={DotsIcon} alt='' className={Styles.footerImage} />
			<Box
				display='flex'
				flexDirection='row'
				gap='20px'
				justifyContent='space-between'
				flexWrap='wrap'
			>
				<Box display='flex' flexDirection='column'>
					<img alt='E-Bike' src={BrandLogo} width={116} />
					<Box
						style={{
							color: '#fff',
							fontWeight: 300,
							fontSize: 18,
							marginTop: 17,
							marginBottom: 31,
							lineHeight: '28px',
							maxWidth: 391,
						}}
					>
						Trafalgar provides progressive, and affordable healthcare, accessible on mobile and
						online for everyone
					</Box>
					<Box
						style={{
							color: '#fff',
							fontWeight: 300,
							fontSize: 16,
							lineHeight: '28px',
						}}
					>
						©eBike 2021. All rights reserved
					</Box>
				</Box>
				<Box display='flex' flexDirection='row' gap='62px' flexWrap='wrap'>
					<Box display='flex' flexDirection='column'>
						<Box
							style={{
								color: '#fff',
								fontWeight: 'bold',
								fontSize: 20,
								lineHeight: '38px',
							}}
						>
							Company
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							Product
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							Bike Type
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							About us
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							Contact
						</Box>
					</Box>
					<Box display='flex' flexDirection='column'>
						<Box
							style={{
								color: '#fff',
								fontWeight: 'bold',
								fontSize: 20,
								lineHeight: '38px',
							}}
						>
							Help
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							Help center
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							Contact support
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							Instructions
						</Box>
						<Box
							style={{
								color: '#fff',
								fontWeight: 300,
								fontSize: 18,
								lineHeight: '38px',
							}}
						>
							How it works
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
