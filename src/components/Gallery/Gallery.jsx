import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  return (
    <section
      className="gallery-content flex flex-col items-center pb-4 overflow-y-hidden"
      id="projects"
    >
      <h2 className="oswald-medium font-bold text-[#262631] text-[2.5rem] lg:text-[7.5rem] text-center">
        FEATURED WORKS
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-12 px-4 py-4">
        {images.map((image, id) => (
          <li key={id} className="rounded-xl my-4">
            <img src={image.src} alt={image.alt} width={300} height={300} />
          </li>
        ))}
      </ul>
    </section>
  );
};
Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default Gallery;
