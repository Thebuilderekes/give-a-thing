import Navbar from '../../components/Shared/Header/Navbar';
import HeroContent from '../../components/Shared/HeroContent/HeroContent';
import SectionContent from '../../components/Shared/SectionContent/SectionContent';
import Gallery from '../../components/Gallery/Gallery';
import Divider from '../../components/Shared/Divider/Divider';
import Footer from '../../components/Shared/Footer/Footer';
import JohnImage from '../../assets/jumping.jpg';
const HomePage = () => {
  const images = [
    {
      id: 1, // Unique identifier for each image (recommended)
      src: '../src/assets/dread.jpg',
      alt: 'A person with dreadlocks hairstyle', // Descriptive alt text
    },
    {
      id: 2,
      src: '../src/assets/edidie.jpg',
      alt: 'People sitting on the edge of wooden floor overlooking mountains',
    },
    {
      id: 3,
      src: '../src/assets/girl.jpg',
      alt: 'A young girl wearing a white top on jeans laughing', // More specific description
    },
    {
      id: 4,
      src: '../src/assets/girlssmiling.jpg',
      alt: "one man and two women sitting and having a chat', // Detailed description",
    },
    {
      id: 5,
      src: '../src/assets/people.jpg',
      alt: 'A group of people jumping in excitement with legs spread apart', // Descriptive alt text
    },
    // Consider adding a check to avoid duplicate images (optional)
    {
      id: 6, // Add an ID if originally missing
      src: '../src/assets/dread.jpg', // Assuming it's a different image
      alt: 'Another person with dreadlocks hairstyle (if applicable)',
    },
  ];

  return (
    <div className="bg-[#0c0c0f]">
      <Navbar />
      <main className="mx-[1rem] lg:mx-[2rem] bg-slate-300">
        <HeroContent
          title="JOHN GRIFFITH"
          description="Capture the best moments of your life."
          heroImage={
            <img
              className="rounded-[20px]"
              src={JohnImage}
              alt="John jumping in air with sun behind his back"
            />
          }
          content={
            <p className="text-slate-200">
              I specialize in creating stunning visuals that tell your story.
              Whether you're looking for captivating portraits, breathtaking
              landscape shots, or dynamic event photography, I'm here to bring
              your vision to life. <br />
              <br /> I offer a range of services to meet your needs, from
              professional headshots to capturing the magic of your special day.{' '}
              <br />
              Let's collaborate and create timeless photographs you'll cherish
              forever.
            </p>
          }
        />
        <Divider />
        <SectionContent
          title="ABOUT ME"
          content={
            <p>
              John's career as a photographer began with a childhood fascination
              with light and shadow. Drawn to the evocative power of the lens,
              he honed his craft, capturing the essence of his coastal hometown.
              His work transcends mere landscapes, weaving narratives of joy,
              resilience, and the human spirit. From intimate family moments to
              the soul of his community, John's photographs tell stories that
              resonate on a universal level. Today, his acclaimed work graces
              galleries worldwide, a testament to his artistic vision and
              enduring passion.
            </p>
          }
        />
        <Divider />

        <Gallery id="project" images={images} />

        <Footer
          email={
            <div>
              <p className="text-slate-200">Say Hello</p>
              <p className="underline">johnexampl@gmail.com</p>
            </div>
          }
          socials={
            <ul>
              <li className="hover:text-slate-300">
                <a href="#">Instagram</a>
              </li>
              <li className="hover:text-slate-300">
                <a href="#">Twitter</a>
              </li>
              <li className="hover:text-slate-300">
                <a href="#">YouTube</a>
              </li>
            </ul>
          }
          attributes={
            <div className="text-slate-100">
              <p>
                Built with{' '}
                <a
                  className="underline"
                  href="http://react.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>{' '}
                Hosted on{' '}
                <a
                  className="underline"
                  href="http://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
              </p>

              <p>
                Built by{' '}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ekeopre-beredugo-204580111/"
                >
                  The builder
                </a>{' '}
                inspired by{' '}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://dribbble.com/shots/20378062-Photography-Website-Homepage"
                >
                  Awe Design Studio
                </a>
              </p>
            </div>
          }
        />
      </main>
    </div>
  );
};

export default HomePage;
