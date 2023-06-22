import { Route, Routes } from 'react-router-dom'

import Header from '../features/Header/Header.tsx'
import Contacts from '../pages/Contacts.tsx'

import './styles/App.scss'

function App() {
	return (
		<div className={'max-w-[1240px] mx-auto px-[15px] w-full'}>
			<Header />

			<Routes>
				<Route path={'/'} element={<Contacts />} />
			</Routes>
		</div>
	)
}

export default App
