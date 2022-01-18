import React from 'react';
import Navbar from '../layout/Navbar';
import { Avatar, Box, Card, CardContent, Divider } from '@mui/material';
import DotsIcon from '../../assets/icons/dots.svg';
import DotsIcon2 from '../../assets/icons/dots2.svg';
import DotsIcon3 from '../../assets/icons/dots3.svg';
import SearchIcon from '../../assets/icons/search.svg';
import BG1 from '../../assets/icons/bg1.svg';
import BG2 from '../../assets/icons/bg2.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import BikeImage from '../../assets/images/bike.svg';
import BikeSmallImage from '../../assets/images/bike-small.svg';
import Styles from '../../styles/Homepage.module.css';
import Lottie from 'react-lottie-player';
import HeaderAnimation from '../../animations/Header.json';
import RiderAnimation from '../../animations/Rider.json';
import CarouselElement from '../layout/carouselElement';
import { styled } from '@mui/system';
import Footer from '../layout/Footer';

function Homepage() {
	const StyledButton = styled(Box)`
		background-color: #ffe8b9;
		width: 48px !important;
		height: 48px !important;
		color: #233348;
		border-radius: 50% !important;
		z-index: 1;
		opacity: 1;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			background: linear-gradient(180deg, rgba(255, 189, 55, 0.58) 0%, #ffbd37 100%);
		}
		&:focus {
			background-color: linear-gradient(
				180deg,
				rgba(255, 189, 55, 0.58) 0%,
				#ffbd37 100%
			) !important;
		}
	`;
	const CarouselButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
		const {
			carouselState: { currentSlide },
		} = rest;
		return (
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					right: '20%',
					display: 'flex',
					flexDirection: 'row',
					gap: 16,
				}}
			>
				{/* // remember to give it position:absolute */}
				<StyledButton
					style={{
						opacity: currentSlide === 0 ? 0.4 : 1,
						cursor: currentSlide === 0 ? 'no-drop' : 'pointer',
					}}
					onClick={() => previous()}
				>
					<img alt='Left' src={ArrowLeft} />
				</StyledButton>
				<StyledButton onClick={() => next()}>
					<img alt='Right' src={ArrowRight} />
				</StyledButton>
			</div>
		);
	};
	const CarouselButtonGroup2 = ({ next, previous, goToSlide, ...rest }) => {
		const {
			carouselState: { currentSlide },
		} = rest;
		return (
			<Box
				style={{
					position: 'absolute',
					bottom: '0px',
					right: '10px',
					flexDirection: 'row',
					gap: 16,
				}}
				sx={{
					display: {
						xs: 'none',
						md: 'flex',
					},
				}}
			>
				{/* // remember to give it position:absolute */}
				<StyledButton
					style={{
						opacity: currentSlide === 0 ? 0.4 : 1,
						cursor: currentSlide === 0 ? 'no-drop' : 'pointer',
					}}
					onClick={() => previous()}
				>
					<img alt='Left' src={ArrowLeft} />
				</StyledButton>
				<StyledButton onClick={() => next()}>
					<img alt='Right' src={ArrowRight} />
				</StyledButton>
			</Box>
		);
	};

	const bikes = [
		{
			name: 'Universal eBike Kit',
			price: '$750.00',
		},
		{
			name: 'Brampoton eBike Kit',
			price: '$750.00',
		},
		{
			name: 'Additional eBike Kit',
			price: '$250.00',
		},
		{
			name: 'Additional eBike Kit',
			price: '$250.00',
		},
	];

	const bikeTypes = [
		{
			name: 'Hybrid Bikes',
		},
		{
			name: 'Fixie Bikes',
		},
		{
			name: 'Folding Bikes',
		},
		{
			name: 'Mount Bikes',
		},
		{
			name: 'City Bikes',
		},
		{
			name: 'More Bikes',
		},
	];

	const customers = [
		{
			name: 'Edward Newgate',
			occupation: 'Pro-Cycler',
			comment:
				'Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
		},
		{
			name: 'James Milner',
			occupation: 'Architect',
			comment:
				'Dummy Text patient engagement app and web portal allow you to access information.',
		},
		{
			name: 'John Stones',
			occupation: 'Pro Runner',
			comment:
				'Dummy Text patient engagement app and web portal allow you to access information instantaneously.',
		},
		{
			name: 'Phillip Ganes',
			occupation: 'Wrestler',
			comment:
				'Dummy Text patient engagement app and web portal allow you to access information instantaneously and securely',
		},
	];
	return (
		<>
			<Navbar />
			{/* Header */}
			<Box className={Styles.headerContainer}>
				<img src={DotsIcon} alt='' className={Styles.headerBackground} />
				<Box className={Styles.headerContentContainer}>
					<Box className={Styles.headerDetails}>
						<h1 className={Styles.introText}>Your Bike Electric Update</h1>
						<Box className={Styles.introTextSubtitle}>
							Dummy text progressive, and affordable healthcare, accessible on mobile and online
							for everyone
						</Box>
						<Box
							sx={{
								display: {
									xs: 'none',
									md: 'block',
								},
								width: '100%',
							}}
						>
							<form className={Styles.searchBoxContainer}>
								<img alt='' src={SearchIcon} className={Styles.searchInputIcon} />
								<input
									type='text'
									id='bikeSearch'
									name='bikeSearch'
									className={Styles.searchInput}
									placeholder='Search Bike or anything'
									required
								/>
								<button className={Styles.searchInputButton}>Find</button>
							</form>
						</Box>
					</Box>
					<Box
						sx={{
							display: {
								xs: 'none',
								md: 'block',
							},
						}}
					>
						<Lottie
							loop
							animationData={HeaderAnimation}
							play
							style={{ width: '26.7578125vw', height: '26.7578125vw' }}
						/>
					</Box>
				</Box>
			</Box>
			{/* Main Bike Section */}
			<Box className={Styles.mainBikeSection}>
				<img
					alt=''
					src={BG1}
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						width: '41.633463541666664vw',
						zIndex: -1,
					}}
				/>

				<CarouselElement
					arrows={false}
					customButtonGroup={<CarouselButtonGroup />}
					md={1.8}
					sm={0.8}
					elements={bikes.map((bike) => (
						<Card
							sx={{
								width: '382.2px',
								boxShadow: '10px 24px 54px rgba(0, 0, 0, 0.06)',
								borderRadius: '20px',
							}}
						>
							<CardContent
								sx={{
									paddingBlock: '23.77px',
									paddingInline: '24px',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<Box className={Styles.cardTitle}>{bike.name}</Box>
								<img
									alt='Bike'
									src={BikeImage}
									style={{
										alignSelf: 'center',
									}}
								/>
								<Divider
									variant='fullWidth'
									flexItem
									sx={{
										backgroundColor: '#C2CFE0',
									}}
								/>
								<Box
									display='flex'
									flexDirection='row'
									alignItems='center'
									justifyContent='space-between'
									marginTop='15.83px'
								>
									<Box display='flex' flexDirection='column' gap='11.88px'>
										<span className={Styles.priceTitle}>Price</span>
										<span className={Styles.price}>{bike.price}</span>
									</Box>
									<button className={Styles.button}>Order</button>
								</Box>
							</CardContent>
						</Card>
					))}
				/>
			</Box>
			{/* Other Bikes section */}
			<Box className={Styles.otherBikeSection}>
				<h4 className={Styles.otherBikesHeader}>Other Type Of Bikes</h4>
				<CarouselElement
					arrows={false}
					xl={7}
					lg={5}
					md={3}
					sm={1.5}
					smallSlider={true}
					elements={bikeTypes.map((bike) => (
						<Box className={Styles.otherBikeContainer}>
							<Card
								sx={{
									width: '227px',
									boxShadow: '10px 24px 54px rgba(0, 0, 0, 0.06);',
									borderRadius: '10px',
								}}
								className={Styles.otherBikeCard}
							>
								<CardContent
									sx={{
										paddingBlock: '15px',
										paddingInline: '42px',
									}}
								>
									<img
										alt='Bike'
										src={BikeSmallImage}
										style={{
											alignSelf: 'center',
										}}
									/>
								</CardContent>
							</Card>
							<Box
								display='flex'
								flexDirection='row'
								justifyContent='center'
								className={Styles.otherBikeName}
							>
								{bike.name}
							</Box>
						</Box>
					))}
				/>
			</Box>
			{/* Hybrid bikes section */}
			<Box className={Styles.hybridBikesSection}>
				<img
					alt=''
					src={BG2}
					style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						width: '41.633463541666664vw',
						zIndex: -1,
					}}
				/>
				<Card
					sx={{
						width: '382.2px',
						boxShadow: '10px 24px 54px rgba(0, 0, 0, 0.06)',
						borderRadius: '20px',
					}}
				>
					<CardContent
						sx={{
							paddingBlock: '23.77px',
							paddingInline: '24px',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Lottie
							loop
							animationData={RiderAnimation}
							play
							style={{ width: '242px', height: '204px', alignSelf: 'center' }}
						/>

						<Divider
							variant='fullWidth'
							flexItem
							sx={{
								backgroundColor: '#C2CFE0',
								marginTop: '33.67px',
								marginBottom: '15.83px',
							}}
						/>
						<Box
							display='flex'
							flexDirection='row'
							alignItems='center'
							justifyContent='space-between'
						>
							<Box display='flex' flexDirection='column' gap='11.88px'>
								<span className={Styles.priceTitle}>Price</span>
								<span className={Styles.price}>$750.00</span>
							</Box>
							<button className={Styles.button}>Order</button>
						</Box>
					</CardContent>
				</Card>
				<Box
					className={Styles.headerDetails}
					style={{
						maxwidth: 450,
					}}
				>
					<h1
						className={Styles.introText}
						style={{
							fontSize: 36,
							marginBottom: 32,
						}}
					>
						Hybrid Bikes
					</h1>
					<Box
						className={Styles.introTextSubtitle}
						style={{
							maxwidth: 450,
							marginBottom: 40,
						}}
					>
						Dummy Text progressive, and affordable healthcare, accessible on mobile and online
						for everyone. To us, it's not just work. We take pride in the solutions we deliver
					</Box>

					<button className={Styles.actionButton}>Learn more</button>
				</Box>
			</Box>
			{/* Customer Section */}
			<Box className={Styles.customerSection}>
				<img src={DotsIcon3} alt='' className={Styles.customerSectionBackground} />

				<Box className={Styles.customerSectionContent}>
					<img src={DotsIcon2} alt='' className={Styles.customerBackground} />
					<h3 className={Styles.customerSectionHeader}>What our customers are saying</h3>
					<Box className={Styles.customerSectionContentLine}></Box>
					<Box width='100%' marginTop='30px'>
						<CarouselElement
							arrows={false}
							showDots={true}
							customButtonGroup={<CarouselButtonGroup2 />}
							smallSlider={true}
							xl={1}
							lg={1}
							md={1}
							sm={1}
							elements={customers.map((customer, index) => (
								<Box className={Styles.customerCommentContainer}>
									<Box className={Styles.customerDetailContainer}>
										<Avatar
											src={`https://picsum.photos/id/23${index}/400/400`}
											sx={{
												width: '141px',
												height: '141px',
												border: '6px solid #fff',
											}}
										/>
										<Box className={Styles.customerName}>{customer.name}</Box>
										<Box className={Styles.customerJob}>{customer.occupation}</Box>
									</Box>
									<Box className={Styles.customerComment}>{customer.comment}</Box>
								</Box>
							))}
						/>
					</Box>
				</Box>
			</Box>
			<Footer />
		</>
	);
}

export default Homepage;
