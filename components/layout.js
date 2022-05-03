import { useRouter } from 'next/router';
import Navbar from './navbar';
import SEO from './seo';
import Footer from './footer';

const Layout = ({ navbarProps, children }) => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<>
			<SEO title="MedSwift Health Care" />
			<Navbar navbarProps={navbarProps} />
			<main className="w-screen min-h-screen">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
