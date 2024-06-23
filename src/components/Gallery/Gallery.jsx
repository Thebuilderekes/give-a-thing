import PropTypes from 'prop-types';


const Gallery = ({imagesURL}) => {
  imagesURL= [
    "https://placehold.co/300x300/262631/white",
    "https://placehold.co/300x300/262631/white",
    "https://placehold.co/300x300/262631/white",
    "https://placehold.co/300x300/262631/white",
    "https://placehold.co/300x300/262631/white",
    "https://placehold.co/300x300/262631/white",
  ]
  return (
    <div className="gallery-content flex flex-col items-center pb-4 overflow-y-hidden">
      <h2 className="oswald-medium font-bold text-[#262631] text-[2.5rem] lg:text-[7.5rem] text-center">FEATURED WORKS</h2>
      <ul className=" grid grid-cols-2 md:grid-cols-3 gap-x-12 px-4 py-4">
        {imagesURL.map((imageURL, index) => (  
          <li key={index}  className="rounded-xl my-4"> 
            <img src={imageURL} alt={`Photo`} /> 
          </li>
        ))}
      </ul>
    </div>
  );
};
Gallery.propTypes = {
	imagesURL: PropTypes.array.isRequired,

  };
export default Gallery;
