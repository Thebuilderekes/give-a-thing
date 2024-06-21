// eslint-disable-next-line react/prop-types


const HeroContent = ({ title, description, content, heroImage }) => {
  return (
  
      <section className="flex flex-col  items-center border border-b-slate-600 py-[3.5rem]">
      <h1 className="lg:text-[7rem] archivo-black-regular p-0 text-[#262631] font-bold">{title}</h1>
      <h2 className="lg:text-[2.5rem] p-0 oswald-medium text-[#262631] font-bold">{description}</h2>
      <div className="flex px-4 gap-[2.5rem] mt-4">
      <div className = "bg-[#262631] text-[1.5rem] oswald-light w-auto lg:w-1/2 text-white p-[2.5rem] rounded-[20px]">{content}</div>
      <div className=" rounded-[20px] w-auto lg:w-1/2">{heroImage}</div>	
      </div>
      </section>
  );
};

export default HeroContent;
