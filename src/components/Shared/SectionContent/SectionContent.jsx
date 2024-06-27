import PropTypes from 'prop-types';

const SectionContent = ({ title, content }) => {
  return (
    <section
      className="flex flex-col md:flex-row gap-[1rem] border-b-slate-600 px-4 "
      id="about"
    >
      <h2 className="w-full text-center md:text-left md:w-1/2 oswald-medium font-bold text-[#262631] text-[2.5rem] lg:text-[4rem]">
        {title}
      </h2>
      <div className="w-full md:w-1/2 text-[1.3rem] lg:text-[1.6rem] oswald-light">
        {content}
      </div>
    </section>
  );
};

SectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};
export default SectionContent;
