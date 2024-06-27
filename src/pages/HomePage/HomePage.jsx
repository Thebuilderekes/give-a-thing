import Navbar from '../../components/Shared/Header/Navbar';
import { Link } from 'react-router-dom';
import HeroContent from '../../components/Shared/HeroContent/HeroContent';
import SectionContent from '../../components/Shared/SectionContent/SectionContent';
import Gallery from '../../components/Gallery/Gallery';
import Divider from '../../components/Shared/Divider/Divider';
import Footer from '../../components/Shared/Footer/Footer';
import JohnImage from '../../assets/dread.jpg';
import img1 from "../../assets/jumping.jpg";
import img2 from "../../assets/girl.jpg";
import img3 from "../../assets/friends.jpg";
import img4 from "../../assets/edidie.jpg";
import img5 from "../../assets/people.jpg";
import img6 from "../../assets/girlssmiling.jpg";
const HomePage = () => {
  const images = [
    {
      id: 1, 
      src: img1,
      alt:"John jumping in air with sun behind his back",
      
    },
    {
      id: 2,
      src: img2,

      alt: 'A young girl wearing a white top on jeans laughing',
    },
    {
      id: 3,
      src: img3,
      alt: 'three women hugging and walking in the beach', 
    },
    {
      id: 4,
      src: img4, 
      alt: 'People sitting on the edge of wooden floor overlooking mountains',
    },
    {
      id: 5,
      src: img5, 
      alt: 'A group of people jumping in excitement with arms and legs spread apart', 
    },
   
    {
      id: 6, 
      src: img6, 
      alt: 'one man and two women sitting on a ledge with a tree behind them while smiling', 
    },
  ];

  return (
    <div className="bg-[#0c0c0f]">
      <Navbar />
      <main className="mx-[1rem] lg:mx-[2rem] bg-slate-300">
        <HeroContent
          title="JOHN GRIFFITH"
          job = "PHOTOGRAPHER"
          description="Capture the best moments of your life."
          heroImage={
            <img
              className="rounded-[20px]"
              src={JohnImage}
              alt="John with dreadlocks hair sitting and leaning agaist a wall"
            />
          }
          content={
            <div className=" flex flex-col items-center">
            <p className="text-slate-200">
              I specialize in creating stunning visuals that tell your story.
              Whether you're looking for captivating portraits, breathtaking
              landscape shots, or dynamic event photography, I'm here to bring
              your vision to life. 
            </p>

          <Link to="/#contact"className="bg-slate-300 text-center p-1 w-40 mt-4 archivo-black-regular text-[#262631] hover:bg-slate-400 hover:text-[#232323]">Contact</Link>
            </div>
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
            <dl>
              <dt className="text-slate-200">Contact</dt>
              <dd className="underddne">johnexampl@gmail.com</dd>
            </dl>
          }
          socials={
            <dl>
              <dt className="hidden sr-only">Socials media links</dt>
              <dd className="hover:text-slate-300">
                <a href="#">Instagram</a>
              </dd>
              <dd className="hover:text-slate-300">
                <a href="#">Twitter</a>
              </dd>
              <dd className="hover:text-slate-300">
                <a href="#">YouTube</a>
              </dd>
            </dl>
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
