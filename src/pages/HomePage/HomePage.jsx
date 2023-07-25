import Navbar from "../../components/Shared/Header/Navbar";
import MainContent from "../../components/Shared/MainContent/MainContent";
const HomePage = () => {
	return (
		<div>
			<Navbar />
			<MainContent
				title="Welcome to the Home Page"
				description="This is the description of the Home Page."
				content={<p>This is the content of the Home Page.</p>}
			/>
		</div>
	);
};

export default HomePage;
