import { IoMdContact } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={'flex items-center justify-between py-3'}>
			<Link
				className={'flex items-center gap-2 text-2xl text-blue'}
				to={'/'}
			>
				<IoMdContact className={'text-3xl'} />
				<p>vContact</p>
			</Link>

			<div className={'flex items-center gap-3'}>
				<button
					className={
						'rounded-3xl bg-blue hover:bg-blend-darken text-white px-3 py-2 transition-all'
					}
				>
					Sign in
				</button>
				<button
					className={
						'rounded-3xl bg-blue hover:bg-blend-darken text-white px-3 py-2 transition-all'
					}
				>
					Sign up
				</button>
			</div>
		</header>
	)
}

export default Header
