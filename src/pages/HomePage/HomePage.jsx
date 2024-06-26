import Navbar from '../../components/Shared/Header/Navbar';
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
