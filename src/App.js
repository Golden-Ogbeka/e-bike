import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EdvoraPage from './components/pages/edvora/EdvoraPage';
import Homepage from './components/pages/Homepage';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/edvora' element={<EdvoraPage />} />
				<Route path='*' element={<Homepage />} />
			</Routes>
		</>
	);
}

export default App;
