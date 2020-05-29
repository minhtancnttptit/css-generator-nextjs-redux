import Link from 'next/link'
import styles from './layout.module.css'
import HeaderMenu from '../nav-bar/index.jsx'

export default function Layout({ children, home }) {
	const pages = [
		{
			id: 1,
			link: '/box-shadow',
			name: 'Box shadow',
		},
		{
			id: 2,
			link: '/text-shadow',
			name: 'Text shadow',
		},
		{
			id: 3,
			link: '/border',
			name: 'Border',
		},
		{
			id: 4,
			link: '/transform',
			name: 'Transform',
		},
	]

	return (
		<>
			<header>
				<HeaderMenu pages={pages} />
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</>
	)
}
