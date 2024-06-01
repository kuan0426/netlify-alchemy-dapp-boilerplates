import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div>
			test
            <Navbar />
			testtest
            {children}
		</div>
	);
}
