import { Box } from '@mui/material';
import React from 'react';
import Styles from './styles.module.css';

function index(props) {
	const slider = document.querySelector(`#${props.id}`);
	let isDown = false;
	let startX;
	let scrollLeft;

	if (slider) {
		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
			slider.style.cursor = props.cursor ? props.cursor : 'grabbing';
		});
		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.style.cursor = props.cursor ? props.cursor : 'grab';
		});
		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.style.cursor = props.cursor ? props.cursor : 'grab';
		});
		slider.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 1; //to scroll fast, multiply by higher number
			slider.scrollLeft = scrollLeft - walk;
		});
	}

	return (
		<Box sx={props.sx} className={Styles.container} id={props.id}>
			{props.children}
		</Box>
	);
}

export default index;
