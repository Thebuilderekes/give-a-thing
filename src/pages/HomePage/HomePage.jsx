import Navbar from '../../components/Shared/Header/Navbar';
import HeroContent from '../../components/Shared/HeroContent/HeroContent';
import SectionContent from '../../components/Shared/SectionContent/SectionContent';
import Gallery from '../../components/Gallery/Gallery';
import Divider from '../../components/Shared/Divider/Divider';
import Footer from '../../components/Shared/Footer/Footer';
import JohnImage from '../../assets/jumping.jpg';
const HomePage = () => {
  const imagesURL = [
    'https://placehold.co/300x300/262631/white',
    'https://placehold.co/300x300/262631/white',
    'https://placehold.co/300x300/262631/white',
    'https://placehold.co/300x300/262631/white',
    'https://placehold.co/300x300/262631/white',
    'https://placehold.co/300x300/262631/white',
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
              className="rounded-[20px] "
              src={JohnImage}
              alt="John wearing a t-shirt"
            />
          }
          content={
            <p className="text-slate-200">
              I specialize in creating stunning visuals that tell your story.
              Whether you're looking for captivating portraits, breathtaking
              landscape shots, or dynamic event photography, I'm here to bring
              your vision to life. I offer a range of services to meet your
              needs, from professional headshots to capturing the magic of your
              special day. <br />
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
              she honed his craft, capturing the essence of his coastal
              hometown. Her work transcends mere landscapes, weaving narratives
              of joy, resilience, and the human spirit. From intimate family
              moments to the soul of his community, Amelia's photographs tell
              stories that resonate on a universal level. Today, his acclaimed
              work graces galleries worldwide, a testament to his artistic
              vision and enduring passion.
            </p>
          }
        />
        <Divider />

        <Gallery id="project" imagesURL={imagesURL} />

        <Footer
          email={
            <div>
              <p>Say Hello</p>
              <p>johnexampl@gmail.com</p>
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
            <div>
              <p>
                Built with <a href="http://react.dev">React</a> Hosted on{' '}
                <a href="http://vercel.cpm">Vercel</a>
              </p>
              <p>
                Photo by{' '}
                <a href="https://unsplash.com/@camadams?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Cam Adams
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/photos/man-wearing-white-long-sleeved-shirt-on-air-photo-imBSxksI7DA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Unsplash
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
