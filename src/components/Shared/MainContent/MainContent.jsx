// eslint-disable-next-line react/prop-types
const MainContent = ({ title, description, content }) => {
	return (
		<main className="main-content">
			<h1>{title}</h1>
			<p>{description}</p>
			<div>{content}</div>
		</main>
	);
};

export default MainContent;
