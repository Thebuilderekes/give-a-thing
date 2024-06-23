import Navbar from "../../components/Shared/Header/Navbar";
import HeroContent from "../../components/Shared/HeroContent/HeroContent";
import SectionContent from "../../components/Shared/SectionContent/SectionContent";
import Gallery from "../../components/Gallery/Gallery";
import Divider from "../../components/Shared/Divider/Divider";
import Footer from "../../components/Shared/Footer/Footer";

const HomePage = () => {
	return (
		<div className="bg-[#0c0c0f]">
			<Navbar />
			<main className="mx-[1rem] lg:mx-[2rem] bg-slate-300">
				<HeroContent
					title="MEMORABLE"
					description="Capture the best moments of your life."
					heroImage={
						<img
							className="rounded-[20px] "
							src="../../src/assets/jumping.jpg"
							
							alt="John wearing a t-shirt"
						/>
					}
					content={
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium perferendis ducimus dolores voluptas fugiat
							repudiandae iure veritatis unde, dignissimos eveniet facere totam
							illum, tempora id possimus voluptatum nesciunt excepturi? Officia!{" "}
						</p>
					}
				/>
				<Divider />
				<SectionContent id="about"
					title="ABOUT ME"
					content={
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
							commodi vitae cumque sint cupiditate architecto, nihil omnis quis
							laborum ratione. lorem Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Ea ut necessitatibus tempore praesentium magni
							hic quod temporibus possimus iure, quia repellendus ab repellat at
							quisquam officia, vitae cumque? Hic dicta quibusdam et, facere
							saepe ab provident distinctio tenetur quia nesciunt. Ipsam aliquid
							minima ipsa impedit tempora corporis, atque veniam laboriosam.
						</p>
					}
				/>
				<Divider />

				<Gallery id="project"/>

				<Footer id="contact"
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
							</li >
							<li className="hover:text-slate-300">
								<a href="#">YouTube</a>
							</li>
						</ul>
					}
					attributes={
						<div>
							<p>Built with <a href="http://react.dev">React</a> Hosted on <a href="http://vercel.cpm">Vercel</a></p>
							<p>Photo by <a href="https://unsplash.com/@camadams?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cam Adams</a> on <a href="https://unsplash.com/photos/man-wearing-white-long-sleeved-shirt-on-air-photo-imBSxksI7DA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
  
						</div>
					}
				/>
			</main>
		</div>
	);
};

export default HomePage;
