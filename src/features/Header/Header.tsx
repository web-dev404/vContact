import { BsGithub } from 'react-icons/bs'
import { IoMdContact } from 'react-icons/io'
import { Link } from 'react-router-dom'

const isDev = process.env.NODE_ENV === 'development'

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

			<div className={'flex items-center'}>
				{isDev ? (
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
				) : (
					<div className={'flex items-center gap-3'}>
						<button
							className={
								'rounded-3xl bg-blue hover:bg-blend-darken text-white px-3 py-2 transition-all'
							}
						>
							Add Contact
						</button>

						<a
							href='https://github.com/web-dev404/vContact'
							target={'_blank'}
							className={'flex items-center gap-2 text-xl text-dark'}
						>
							<BsGithub className={'text-2xl'} />
							Github
						</a>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
