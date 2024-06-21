
const SectionContent = ({ title, content }) => {
	return (
		<div className="flex gap-[2.5rem] border-b-slate-600 py-[2rem] px-4" >
			<h2 className="w-2/3 oswald-medium font-bold text-[1.5rem] lg:text-[3rem]">{title}</h2>
			<div className="w-1/3 text-[1rem] lg:text-[1.2rem] oswald-light">{content}</div>
		</div>
	);
};

export default SectionContent;