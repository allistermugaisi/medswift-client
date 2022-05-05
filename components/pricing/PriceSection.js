import React from 'react';

const PriceSection = () => {
	return (
		<>
			{/* Pricing Option */}
			<section className="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
				<div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
					<div className="flex flex-col items-center leading-7 text-center text-gray-900">
						<h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
							Pricing Options
						</h2>
						<p className="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
							We&apos;ve got a plan for companies of any size
						</p>
					</div>
					<div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-blue-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
						<div className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
							<h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
								Basic
							</h3>
							<p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
								The basic plan is a good fit for smaller teams and startups
							</p>
							<div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
								<p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
									$19
								</p>
								<p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
									per user <span className="block">per month</span>
								</p>
							</div>

							<button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
								Select Plan
							</button>
						</div>
						<div className="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
							<h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
								Plus
							</h3>
							<p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
								The plus plan is a good fit for medium-size to larger companies
							</p>
							<div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
								<p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
									$39
								</p>
								<p className="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
									per user <span className="block">per month</span>
								</p>
							</div>
							<button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
								Select Plan
							</button>
						</div>
						<div className="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
							<h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
								Pro
							</h3>
							<p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
								The pro plan is a good fit for larger and enterprise companies.
							</p>
							<div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
								<p className="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
									$59
								</p>
								<p className="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
									per user <span className="block">per month</span>
								</p>
							</div>
							<button className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
								Select Plan
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* Pricing Details */}
			<section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="lg:w-1/4 mt-48 hidden lg:block">
						<div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
								Fingerstache disrupt
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Franzen hashtag
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Tilde art party
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Banh mi cornhole
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Waistcoat squid hexagon
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Pinterest occupy authentic
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Brooklyn helvetica
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Long Feature Two
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Feature One
							</p>
						</div>
					</div>
					<div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
						<div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
							<div className="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 className="tracking-widest">START</h3>
								<h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">
									Free
								</h2>
								<span className="text-sm text-gray-600">Next 3 months</span>
							</div>
							<p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
								Schlitz single-origin
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
								Feature
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
								<button className="uppercase flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									Get Started
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-auto"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p className="text-xs text-gray-500 mt-3">
									Literally you probably haven&apos;t heard of them jean shorts.
								</p>
							</div>
						</div>
						<div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
							<span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
								POPULAR
							</span>
							<div className="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 className="tracking-widest">SCALE</h3>
								<h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
									$38
									<span className="text-gray-600 text-base ml-1">/mo</span>
								</h2>
								<span className="text-sm text-gray-600">
									Charging $456 per year
								</span>
							</div>
							<p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
								Schlitz single-origin
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
								Feature
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div className="p-6 text-center border-t border-gray-300">
								<button className="uppercase flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									Get Started
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-auto"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p className="text-xs text-gray-500 mt-3">
									Literally you probably haven&apos;t heard of them jean shorts.
								</p>
							</div>
						</div>
						<div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
							<div className="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 className="tracking-widest">ENTERPRISE</h3>
								<h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
									Contact Us
									{/* <span className="text-gray-600 text-base ml-1">/mo</span> */}
								</h2>
								<span className="text-sm text-gray-600">
									Charging $648 per year
								</span>
							</div>
							<p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
								Schlitz single-origin
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
								Feature
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div className="p-6 text-center border-t border-gray-300">
								<button className="uppercase flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									Contact Us
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-auto"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p className="text-xs text-gray-500 mt-3">
									Literally you probably haven&apos;t heard of them jean shorts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PriceSection;
