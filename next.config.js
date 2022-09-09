/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	compiler: {
		styledComponents: true,
	},
	images: {
		domains: [
			"flagcdn.com",
			"upload.wikimedia.org",
			"unsplash.com",
			"images.unsplash.com",
			"lh3.googleusercontent.com",
			"firebasestorage.googleapis.com",
		],
	},
};

module.exports = nextConfig;
