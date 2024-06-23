// eslint-disable-next-line react/prop-types
import PropTypes from 'prop-types';


const HeroContent = ({ title, description, content, heroImage }) => {
  return (
  
      <section className="flex flex-col  items-center py-[3.5rem]">
      <h1 className="animate-slidein300 opacity-0 text-[2.5rem] lg:text-[7rem] archivo-black-regular p-0 text-[#262631] font-bold">{title}</h1>
      <h2 className="animate-slidein500 opacity-0 text-[1.2rem] lg:text-[2.5rem] p-0 oswald-medium text-[#262631] font-bold">{description}</h2>
      <div className="animate-slidein700 opacity-0 flex flex-col-reverse md:flex-row px-2 lg:px-4 gap-[2.5rem] mt-4">
      <div className = "bg-[#262631] text-[1rem] lg:text-[1.5rem] oswald-light w-auto lg:w-1/2 text-white p-[1.5rem] lg:p-[2.5rem] rounded-[20px]">{content}</div>
      <div className=" rounded-[20px] w-auto lg:w-1/2">{heroImage}</div>	
      </div>
      </section>
  );
};
HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  heroImage: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default HeroContent;
