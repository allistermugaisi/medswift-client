import Head from 'next/head';
import Script from 'next/script';

const SEO = ({
	description = 'Lifestyle Medicine | Health & Wellness | Telemedicine | Healthcare Service Providers',
	author = 'MedSwift Technology',
	meta,
	title = 'MedSwift Health Care',
}) => {
	const metaData = [
		{
			name: `description`,
			content: description,
		},
		{
			property: `og:title`,
			content: title,
		},
		{
			property: `og:description`,
			content: description,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:creator`,
			content: author,
		},
		{
			name: `twitter:title`,
			content: title,
		},
		{
			name: `twitter:description`,
			content: description,
		},
	].concat(meta);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/icon.jpeg" sizes="32x32" />
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{metaData.map(({ name, content }, i) => (
					<meta key={i} name={name} content={content} />
				))}
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
				></link>
			</Head>
			<Script
				type="module"
				src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
			/>
			<Script
				type="module"
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
				strategy="afterInteractive"
			/>
		</>
	);
};

export default SEO;

SEO.defaultProps = {
	lang: `en`,
	meta: [],
};
