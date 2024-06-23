import PropTypes from 'prop-types';

const SectionContent = ({ title, content }) => {
	return (
		<div className="flex flex-col md:flex-row gap-[1rem] border-b-slate-600 py-[2rem] px-4" >
			<h2 className="w-full text-center md:text-left md:w-2/3 oswald-medium font-bold text-[#262631] text-[2.5rem] lg:text-[3rem]">{title}</h2>
			<div className="w-full md:w-1/3 text-[1rem] lg:text-[1.2rem] oswald-light">{content}</div>
		</div>
	);
};

SectionContent.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.object.isRequired,
  };
export default SectionContent;