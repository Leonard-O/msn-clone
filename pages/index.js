import Head from 'next/head';
import Header from './Header';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>MSN</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Header />
				{/* Companies */}
				{/* Countries */}
				{/* Main */}
			</div>
		</div>
	);
}
