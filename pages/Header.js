import { CogIcon, HomeIcon } from '@heroicons/react/outline';
import Image from 'next/image';

function Header() {
	return (
		<div>
			<div className="flex items-center justify-between p-5 bg-gray-100">
				<div className="flex items-center">
					<Image
						className="object-contain"
						src="/images/msn-logo.png"
						width={50}
						height={50}
					/>

					{/* <HomeIcon className="h-5 w-5 text-blue-500 mr-5" /> */}
					<h1 className="cursor-pointer">MSN</h1>
				</div>
				<div className="flex border-2 border-gray-200 rounded">
					<input
						type="text"
						className="px-4 py-2 w-80"
						placeholder="Search..."
					/>
					<button class="px-4 text-white bg-gray-600 border-l ">Search</button>
				</div>

				<div className="flex items-center">
					<p className="mr-5 cursor-pointer hover:underline hover:text-color-blue-500">
						Sign in
					</p>
					<CogIcon className="h-5 w-5 text-blue-500" />
				</div>
			</div>
		</div>
	);
}

export default Header;
