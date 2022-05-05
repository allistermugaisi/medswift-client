import React from 'react';
import Image from 'next/image';

const MainSection = () => {
	return (
		<>
			<section className="px-2 py-32 bg-white md:px-0">
				<div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
					<div className="flex flex-wrap items-center sm:-mx-3">
						<div className="w-full md:w-1/2 md:px-3">
							<div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
								<h1 className="text-xl font-bold tracking-wide text-gray-900 sm:text-2xl md:text-5xl">
									<span className="block">Consult a Specialist anytime,</span>
									<span className="block tracking-tight text-indigo-600">
										anywhere by video call
									</span>
								</h1>
								<p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
									Talk with a specialist using our highly secured HIPAA
									compliant end-to-end encrypted video call.
								</p>
								<div className="relative flex flex-col sm:flex-row sm:space-x-4">
									<a
										href="#_"
										className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
									>
										Take Appointment
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5 ml-1"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<line x1="5" y1="12" x2="19" y2="12"></line>
											<polyline points="12 5 19 12 12 19"></polyline>
										</svg>
									</a>
									<a
										href="#_"
										className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
									>
										Unlimited Chat
									</a>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
								<Image
									className="object-cover"
									alt="medswift"
									src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
									width={1050}
									height={600}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<div
				className="px-5 sm:px-10 lg:px-10 xl:px-20 py-8 bg-gray-50"
				id="features"
			>
				<div className="container mx-auto">
					<h3 className="leading-none font-bold text-xl sm:text-3xl">
						Features
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						<div className="w-full max-w-sm mt-6 lg:mt-8 bg-white rounded-lg shadow-md p-12 lg:p-8 lg:mx-4 xl:p-12">
							<div className="p-4 inline-block bg-indigo-200 rounded-lg">
								<svg
									className="text-indigo-500 w-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="12" cy="12" r="10" />
									<path d="M8 14s1.5 2 4 2 4-2 4-2" />
									<line x1="9" y1="9" x2="9.01" y2="9" />
									<line x1="15" y1="9" x2="15.01" y2="9" />
								</svg>
							</div>
							<div className="mt-4 font-bold text-base sm:text-xl tracking-wide">
								Find Specialist
							</div>
							<div className="text-sm">
								We guarantee that every designer you ever work with will be an
								awesome member for your team. We conduct personal interview with
								every designer to ensure that we only get the best.
							</div>
						</div>

						<div className="w-full max-w-sm mt-8 bg-white rounded-lg shadow-md p-12 lg:p-8 lg:mx-4 xl:p-12">
							<div className="p-4 inline-block bg-green-200 rounded-lg">
								<svg
									className="text-green-500 w-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="12" y1="1" x2="12" y2="23" />
									<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
								</svg>
							</div>
							<div className="mt-4 font-bold text-base sm:text-xl tracking-wide">
								Schedule Appointment
							</div>
							<div className="text-sm">
								Be assured that you will always get the best rates. We
								continously monitor global freelance wage trends to ensure that
								no one is under or overpaid.
							</div>
						</div>

						<div className="w-full max-w-sm mt-8 bg-white rounded-lg shadow-md p-12 lg:p-8 lg:mx-4 xl:p-12">
							<div className="p-4 inline-block bg-red-200 rounded-lg">
								<svg
									className="text-red-500 w-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path
										xmlns="http://www.w3.org/2000/svg"
										d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
									/>
									<line
										xmlns="http://www.w3.org/2000/svg"
										x1="12"
										y1="9"
										x2="12"
										y2="13"
									/>
									<line
										xmlns="http://www.w3.org/2000/svg"
										x1="12"
										y1="17"
										x2="12.01"
										y2="17"
									/>
								</svg>
							</div>
							<div className="mt-4 font-bold text-base sm:text-xl tracking-wide">
								Get your Solution
							</div>
							<div className="text-sm">
								Money is held by us in escrow subject to project completion. If
								there is any dispute, a customer service representative will
								manually review the case and take appropriate action.
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* section */}
			<section className="text-gray-700 body-font">
				<div className="max-w-6xl mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="w-3/4 title-font font-bold text-2xl sm:text-4xl mb-4 text-gray-900">
							Make an Appointment To Find A Solution
						</h1>
						<p className="mb-8 leading-relaxed">
							Now you can make an appointment with your Specialist anywhere and
							anytime via online booking
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Make Appointment
							</button>
							{/* <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
								Button
							</button> */}
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<Image
							className="object-cover object-center rounded"
							alt="hero"
							src="https://dummyimage.com/720x600/edf2f7/a5afbd"
							width={600}
							height={720}
						/>
					</div>
				</div>
			</section>

			{/* Popular Specialists */}
			<div
				className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-white"
				id="cards"
			>
				<div className="max-w-screen-xl mx-auto">
					<h3 className="leading-none font-bold text-xl sm:text-3xl">
						Popular Specialists
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:mt-8">
						<div className="lg:mx-2 flex flex-col items-center">
							<div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
								<div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-md rounded-lg bg-white relative">
									<div className="text-lg font-bold text-gray-700 leading-tight">
										Neurology
									</div>
									<div>
										<div className="flex justify-between mt-6 text-xs font-bold">
											<div className="flex items-start">
												<svg
													className="text-gray-400 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
													<circle cx="12" cy="10" r="3"></circle>
												</svg>
												<span className="ml-1 text-gray-500">Nairobi City</span>
											</div>

											<div className="flex items-start ml-4">
												<svg
													className="text-gray-400 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<rect
														xmlns="http://www.w3.org/2000/svg"
														x="2"
														y="7"
														width="20"
														height="14"
														rx="2"
														ry="2"
													/>
													<path
														xmlns="http://www.w3.org/2000/svg"
														d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
													/>
												</svg>
												<span className="ml-1 text-gray-500">
													Joined (3 Years)
												</span>
											</div>
										</div>
										<div className="text-center flex flex-row flex-wrap justify-between items-center text-xs font-bold">
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
												Full Time
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
												Remote
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
												4 Years Exp
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
												$30/Hr
											</span>
										</div>
										<div className="mt-12 flex items-center">
											<div
												className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
												alt=""
												style={{
													backgroundImage:
														'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80");',
												}}
											></div>
											<div className="ml-5">
												<div className="font-bold text-gray-800">
													Sasha Sloan
												</div>
												<div className="text-xs text-gray-500">
													Book Appointment
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:mx-2 flex flex-col items-center">
							<div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
								<div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-md rounded-lg bg-white relative">
									<div className="text-lg font-bold text-gray-700 leading-tight">
										Oncology
									</div>
									<div>
										<div className="flex justify-between mt-6 text-xs font-bold">
											<div className="flex items-start">
												<svg
													className="text-gray-400 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
													<circle cx="12" cy="10" r="3"></circle>
												</svg>
												<span className="ml-1 text-gray-500">Mombasa</span>
											</div>

											<div className="flex items-start ml-4">
												<svg
													className="text-gray-400 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<rect
														xmlns="http://www.w3.org/2000/svg"
														x="2"
														y="7"
														width="20"
														height="14"
														rx="2"
														ry="2"
													/>
													<path
														xmlns="http://www.w3.org/2000/svg"
														d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
													/>
												</svg>
												<span className="ml-1 text-gray-500">
													Joined (8 Years)
												</span>
											</div>
										</div>
										<div className="text-center flex flex-row flex-wrap justify-between items-center text-xs font-bold">
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
												Part Time
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
												Remote
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
												14 Years Exp
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
												$45/Hr
											</span>
										</div>
										<div className="mt-12 flex items-center">
											<div
												className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
												alt=""
												style={{
													backgroundImage:
														'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80");',
												}}
											></div>
											<div className="ml-4">
												<div className="font-bold text-gray-800">
													Nathan Lan
												</div>
												<div className="text-xs text-gray-500">
													Book Appointment
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:mx-2 flex flex-col items-center">
							<div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
								<div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-md rounded-lg bg-white relative">
									<div className="text-lg font-bold text-gray-700 leading-tight">
										Cardiology
									</div>
									<div>
										<div className="flex justify-between mt-6 text-xs font-bold">
											<div className="flex items-start">
												<svg
													className="text-gray-400 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
													<circle cx="12" cy="10" r="3"></circle>
												</svg>
												<span className="ml-1 text-gray-500">Kisumu</span>
											</div>

											<div className="flex items-start ml-4">
												<svg
													className="text-gray-400 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<rect
														xmlns="http://www.w3.org/2000/svg"
														x="2"
														y="7"
														width="20"
														height="14"
														rx="2"
														ry="2"
													/>
													<path
														xmlns="http://www.w3.org/2000/svg"
														d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
													/>
												</svg>
												<span className="ml-1 text-gray-500">
													Joined (1 Years)
												</span>
											</div>
										</div>
										<div className="text-center flex flex-row flex-wrap justify-between items-center text-xs font-bold">
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
												Part Time
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
												Remote
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
												2 Years Exp
											</span>
											<span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
												$20/Hr
											</span>
										</div>
										<div className="mt-12 flex items-center">
											<div
												className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
												alt=""
												style={{
													backgroundImage:
														' url("https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80");',
												}}
											></div>
											<div className="ml-4">
												<div className="font-bold text-gray-800">
													Jeremy Daer
												</div>
												<div className="text-xs text-gray-500">
													Book Appointment
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials */}
			<section className="flex items-center justify-center py-20 bg-white">
				<div className="px-16 bg-white">
					<div className="max-w-6xl flex flex-col items-start mx-auto lg:items-center">
						<p className="relative flex items-start justify-start w-full text-sm sm:text-base font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
							Don't just take our word for it
						</p>

						<h2 className="relative flex items-start justify-start w-full max-w-3xl text-2xl sm:text-4xl font-bold lg:justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
								viewBox="0 0 975.036 975.036"
							>
								<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
							</svg>
							See what others are saying
						</h2>
						<div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

						<div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
							<div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
								<div className="flex items-center justify-center">
									<div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
										<Image
											src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
											className="object-cover w-full h-full"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="flex flex-col items-start justify-center">
										<h4 className="font-bold text-gray-800">John Doe</h4>
										<p className="text-gray-600">CEO of Something</p>
									</div>
								</div>
								<blockquote className="mt-8 text-lg text-gray-500">
									"This is a no-brainer if you want to take your business to the
									next level. If you are looking for the ultimate toolset, this
									is it!"
								</blockquote>
							</div>
							<div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
								<div className="flex items-center justify-center">
									<div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
										<Image
											src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
											className="object-cover w-full h-full"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="flex flex-col items-start justify-center">
										<h4 className="font-bold text-gray-800">Jane Doe</h4>
										<p className="text-gray-600">CTO of Business</p>
									</div>
								</div>
								<blockquote className="mt-8 text-lg text-gray-500">
									"Thanks for creating this service. My life is so much easier.
									Thanks for making such a great product."
								</blockquote>
							</div>
							<div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
								<div className="flex items-center justify-center">
									<div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
										<Image
											src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
											className="object-cover w-full h-full"
											width="100%"
											height="100%"
										/>
									</div>
									<div className="flex flex-col items-start justify-center">
										<h4 className="font-bold text-gray-800">John Smith</h4>
										<p className="text-gray-600">Creator of Stuff</p>
									</div>
								</div>
								<blockquote className="mt-8 text-lg text-gray-500">
									"Packed with awesome content and exactly what I was looking
									for. I would highly recommend this to anyone."
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MainSection;
