import React from 'react';
import Styles from './styles.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	Box,
	// styled
} from '@mui/system';

// const StyledBoxRight = styled(Box)`
// 	background-color: #ffffff;
// 	width: 40.67px !important;
// 	height: 40.67px !important;
// 	color: #1e1e1e;
// 	transition: all 0.5s;
// 	border-radius: 50% !important;
// 	position: absolute !important;
// 	right: 10px;
// 	z-index: 1;
// 	cursor: pointer;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	&:hover {
// 		background-color: #484848;
// 		color: #fff;
// 	}
// 	&:focus {
// 		background-color: #484848;
// 		color: #fff;
// 	}
// `;
// const StyledBoxLeft = styled(Box)`
// 	background-color: #ffffff;
// 	width: 40.67px !important;
// 	height: 40.67px !important;
// 	color: #1e1e1e;
// 	transition: all 0.5s;
// 	border-radius: 50% !important;
// 	position: absolute !important;
// 	left: 10px;
// 	z-index: 1;
// 	cursor: pointer;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	&:hover {
// 		background-color: #484848;
// 		color: #fff;
// 	}
// 	&:focus {
// 		background-color: #484848;
// 		color: #fff;
// 	}
// `;

function index(props) {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 2000 },
			items: props.xl ? props.xl : 4,
		},
		desktop: {
			breakpoint: { max: 2000, min: 1366 },
			items: props.lg ? props.lg : 3,
		},
		tablet: {
			breakpoint: { max: 1366, min: 464 },
			items: props.md ? props.md : 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: props.sm ? props.sm : 1,
		},
	};

	// const CustomRightArrow = ({ onClick, ...rest }) => {
	// 	const {
	// 		onMove,
	// 		carouselState: { currentSlide, deviceType },
	// 	} = rest;
	// 	// onMove means if dragging or swiping in progress.
	// 	return (
	// 		<StyledBoxRight onClick={() => onClick()}>
	// 			{/* <ArrowForwardIosRounded color="inherit" fontSize="small" /> */}
	// 		</StyledBoxRight>
	// 	);
	// };
	// const CustomLeftArrow = ({ onClick, ...rest }) => {
	// 	const {
	// 		onMove,
	// 		carouselState: { currentSlide, deviceType },
	// 	} = rest;
	// 	// onMove means if dragging or swiping in progress.
	// 	return (
	// 		<StyledBoxLeft onClick={() => onClick()}>
	// 			{/* <ArrowBackIosNewRounded color="inherit" fontSize="small" /> */}
	// 		</StyledBoxLeft>
	// 	);
	// };

	return (
		<Box
			sx={{
				maxWidth: props.maxWidth ? props.maxWidth : '100vw',
			}}
		>
			<Carousel
				arrows={props.arrows}
				customButtonGroup={props.customButtonGroup}
				responsive={responsive}
				infinite={props.infinite ? props.infinite : false}
				sliderClass={props.smallSlider ? Styles.smallSlider : Styles.slider}
				containerClass={Styles.container}
				itemClass={Styles.item}
				customDot={props.customDot}
				showDots={props.showDots}
				// customRightArrow={<CustomRightArrow />}
				// customLeftArrow={<CustomLeftArrow />}
			>
				{props.elements ? props.elements.map((element) => <Box>{element}</Box>) : <></>}
			</Carousel>
		</Box>
	);
}

export default index;
