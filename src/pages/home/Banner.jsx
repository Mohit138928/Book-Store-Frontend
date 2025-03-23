// import bannerIMG from "../../assets/bannerIMG.png"
import BookStoreHomeIMG from "../../components/BannerIMG/BookStoreHomeIMG";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse pb-16 pt-4 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end z-10">
        {/* <img src={bannerIMG} alt="Image"/> */}
        <BookStoreHomeIMG />
      </div>
      <div className="md:w-1/2 w-full z-10">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Books This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>

        <Link to="/register"><button className="btn-primary text-black">Subscribe</button></Link>
      </div>
      <AnimatedGridPattern
        width={60}
        height={60}
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "sm:[mask-image:radial-gradient(950px_circle_at_center,white,transparent)]",
          "inset-x-[-50%] inset-y-[10%] h-[100%] skew-y-0 w-[150%] sm:h-[90%] sm:w-[100%] sm:inset-x-[0] mask-top-bottom-fade opacity-50"
        )}
      />
    </div>
  );
};

export default Banner;
