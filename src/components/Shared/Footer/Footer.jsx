import PropTypes from 'prop-types';

const Footer = ({ email, socials, attributes }) => {
  return (
    <footer className="bg-[#262631]  text-slate-400 py-4" id="contact">
      <div className="flex text-[1rem] md:text-[2.5rem] pb-[4rem] justify-around oswald-medium">
        <div>{email}</div>
        <div>{socials}</div>
      </div>
      <div className="text-center oswald-light text-[0.4rem] md:text-[0.9rem]">
        <div>{attributes}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  email: PropTypes.object.isRequired,
  socials: PropTypes.object.isRequired,
  attributes: PropTypes.object.isRequired,
};
export default Footer;
