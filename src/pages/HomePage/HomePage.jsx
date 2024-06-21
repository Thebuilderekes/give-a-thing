import Navbar from "../../components/Shared/Header/Navbar";
import HeroContent from "../../components/Shared/HeroContent/HeroContent";
import SectionContent from "../../components/Shared/SectionContent/SectionContent"
import Gallery from "../../components/Gallery/Gallery";


const HomePage = () => {
	return (
		<div className="bg-[#0c0c0f]">
			<Navbar />
			<main className="mx-[2rem] bg-slate-200">
			<HeroContent
				title="VISUALIZE"
				description="Let's capture the best moments of your life."
				heroImage={<img className=" rounded rounded-[20px] " src="https://placehold.co/600x400" srcSet= "https://placehold.co/600x400 1400w https://placehold.co/300x300 400w" alt="John wearing a t-shirt"/>}
				content={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis ducimus dolores voluptas fugiat repudiandae iure veritatis unde, dignissimos eveniet facere totam illum, tempora id possimus voluptatum nesciunt excepturi? Officia! </p>}
			/>
            <SectionContent
            title="ABOUT ME"
              content={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi
                vitae cumque sint cupiditate architecto, nihil omnis quis laborum
                ratione. lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut necessitatibus tempore praesentium magni hic quod temporibus possimus iure, quia repellendus ab repellat at quisquam officia, vitae cumque? Hic dicta quibusdam et, facere saepe ab provident distinctio tenetur quia nesciunt. Ipsam aliquid minima ipsa impedit tempora corporis, atque veniam laboriosam.
             </p>
        }
      />

             <Gallery />
			</main>
		</div>
	);
};

export default HomePage;
