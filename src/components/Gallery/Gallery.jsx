const Gallery = () => {
  return (
    <div className="gallery-content">
      <h2 className="oswald-medium font-bold text-[#262631] text-[1.5rem] lg:text-[7.5rem] text-center">FEATURED WORKS</h2>
      <ul className="flex justify-between gap-4">
        <li>
          img1
          <img src="https://placehold.co/150x150/coffee/white" alt="photo" />
        </li>

        <li>
          img2
          <img src="https://placehold.co/150x150/coffee/white" alt="photo" />
        </li>
        <li>
          img3
          <img src="https://placehold.co/150x150/coffee/white" alt="photo" />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
