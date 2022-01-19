import React from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import Styles from './styles.module.css';
import { Divider, Grid } from '@mui/material';
import HorizontalSlider from '../../layout/horizontalSlider';
import ScrollArrow from '../../../assets/icons/scroll-arrow.svg';

function EdvoraPage() {
	const [allProducts, setProducts] = React.useState([]);
	const [filteredProducts, setFiltereredProducts] = React.useState([]);
	const [allCategories, setAllCategories] = React.useState([]);
	const [filteredCategories, setFilteredCategories] = React.useState([]);

	React.useEffect(() => {
		const getAllProducts = async () => {
			try {
				const response = await axios.get('https://assessment-edvora.herokuapp.com');
				setProducts(response.data);
				setFiltereredProducts(response.data);
				setAllCategories([...new Set(response.data.map((item) => item.product_name))]);
				setFilteredCategories([...new Set(response.data.map((item) => item.product_name))]);
			} catch (error) {
				console.log(error);
			}
		};
		getAllProducts();
	}, []);

	// console.log(allProducts);
	const moveSlide = (id) => {
		document.getElementById(id).scrollLeft += 100;
	};

	return (
		<Box className={Styles.container}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={3}>
					<Box
						style={{
							// width: '100%',
							// height: '275px',
							backgroundColor: '#131313',
							paddingTop: 24,
							paddingLeft: 25,
							paddingRight: 34.55,
							borderRadius: 15,
							paddingBottom: 42.5,
						}}
					>
						<Box
							style={{
								fontSize: 20,
								fontWeight: 300,
								lineHeight: '24px',
								color: '#A5A5A5',
								marginBottom: 11,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<span>Filters</span>
							<span
								style={{
									fontSize: 13,
									cursor: 'pointer',
								}}
								onClick={() => {
									setFiltereredProducts(allProducts);
									setFilteredCategories(allCategories);
								}}
							>
								clear
							</span>
						</Box>
						<Box
							style={{
								width: '100%',
								height: 1,
								backgroundColor: '#CBCBCB',
								marginBottom: 36,
							}}
						/>
						<select
							name='products'
							id='products'
							style={{
								width: '100%',
								height: '37.5px',
								backgroundColor: '#232323',
								borderRadius: 4.68775,
								color: '#FFFFFF',
								fontSize: 17,
								lineHeight: '20px',
								paddingBlock: 8,
								paddingLeft: 13,
								paddingRight: 11.5,
								border: 'none',
								marginBottom: 12.5,
							}}
							onChange={(e) => {
								setFiltereredProducts(
									allProducts.filter((product) => product.product_name === e.target.value)
								);
								setFilteredCategories(
									allCategories.filter((category) => category === e.target.value)
								);
							}}
						>
							<option value='' selected disabled>
								Products
							</option>
							{allCategories && allCategories.length > 0 ? (
								allCategories.map((category) => <option value={category}>{category}</option>)
							) : (
								<h1>No product found. Reload page</h1>
							)}
						</select>
						<select
							name='products'
							id='products'
							style={{
								width: '100%',
								height: '37.5px',
								backgroundColor: '#232323',
								borderRadius: 4.68775,
								color: '#FFFFFF',
								fontSize: 17,
								lineHeight: '20px',
								paddingBlock: 8,
								paddingLeft: 13,
								paddingRight: 11.5,
								border: 'none',
								marginBottom: 12.5,
							}}
							onChange={(e) => {
								setFiltereredProducts(
									allProducts.filter((product) => product.address.state === e.target.value)
								);
							}}
						>
							<option value='' selected disabled>
								State
							</option>
							{allProducts && allProducts.length > 0 ? (
								[...new Set(allProducts.map((item) => item.address.state))].map((state) => (
									<option value={state}>{state}</option>
								))
							) : (
								<h1>No state found. Reload page</h1>
							)}
						</select>
						<select
							name='products'
							id='products'
							style={{
								width: '100%',
								height: '37.5px',
								backgroundColor: '#232323',
								borderRadius: 4.68775,
								color: '#FFFFFF',
								fontSize: 17,
								lineHeight: '20px',
								paddingBlock: 8,
								paddingLeft: 13,
								paddingRight: 11.5,
								border: 'none',
								marginBottom: 12.5,
							}}
							onChange={(e) => {
								setFiltereredProducts(
									allProducts.filter((product) => product.address.city === e.target.value)
								);
							}}
						>
							<option value='' selected disabled>
								City
							</option>
							{allProducts && allProducts.length > 0 ? (
								[...new Set(allProducts.map((item) => item.address.city))].map((city) => (
									<option value={city}>{city}</option>
								))
							) : (
								<h1>No city found. Reload page</h1>
							)}
						</select>
					</Box>
				</Grid>
				<Grid item xs={12} md={9}>
					{filteredCategories && filteredCategories.length > 0 ? (
						filteredCategories.map((category) => (
							<Box position='relative'>
								<h3>{category}</h3>
								<Divider variant='fullWidth' />
								<img
									src={ScrollArrow}
									alt=''
									style={{
										position: 'absolute',
										cursor: 'pointer',
										top: '50%',
										right: '-20px',
									}}
									onClick={() => moveSlide(`product-${category}`)}
								/>
								<HorizontalSlider id={`product-${category}`}>
									{filteredProducts &&
										filteredProducts.length > 0 &&
										filteredProducts
											.filter((item) => item.product_name === category)
											.map((product) => (
												<>
													<Box className={Styles.productContainer}>
														<Box
															display='flex'
															flexDirection='row'
															justifyContent='space-between'
															alignItems='stretch'
															marginBottom='13px'
														>
															<img
																alt='Product'
																src={product.image}
																style={{
																	width: 70,
																	height: 70,
																	objectFit: 'cover',
																	borderRadius: 5,
																	marginRight: 20,
																}}
															/>
															<Box display='flex' flexDirection='column'>
																<Box className={Styles.name}>{product.product_name}</Box>
																<Box className={Styles.brand}>{product.brand_name}</Box>
																<Box className={Styles.price}>{product.price}</Box>
															</Box>
														</Box>
														<Box
															display='flex'
															justifyContent='space-between'
															flexDirection='row'
															flexWrap='wrap'
															gap='10px'
															marginBottom='14px'
														>
															<Box className={Styles.location}>
																{product.address?.city}, {product.address?.state}
															</Box>
															<Box className={Styles.date}>
																Date: {product.time && new Date(product.time).toLocaleDateString()}
															</Box>
														</Box>
														<Box className={Styles.description}>{product.discription}</Box>
													</Box>
												</>
											))}
								</HorizontalSlider>
							</Box>
						))
					) : (
						<h1>No product found. Reload page</h1>
					)}
				</Grid>
			</Grid>
		</Box>
	);
}

export default EdvoraPage;
