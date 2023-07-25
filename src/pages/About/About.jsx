import Navbar from "../../components/Shared/Header/Navbar";
import MainContent from "../../components/Shared/MainContent/MainContent";

const About = () => {
	return (
		<div>
			<Navbar />
			<MainContent
				title="Welcome to the About Page"
				description="This is the description of the About Page."
				content={<p>This is the content of the About Page.</p>}
			/>
		</div>
	);
};

export default About;
