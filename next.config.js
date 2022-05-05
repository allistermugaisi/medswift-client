/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'res.cloudinary.com',
			'tailwindui.com',
			'dummyimage.com',
			'www.scorepromotions.com',
			's3-us-west-2.amazonaws.com',
			'images.unsplash.com',
		],
	},
};

module.exports = nextConfig;
