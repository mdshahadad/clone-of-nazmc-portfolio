import BannerImage from "./BannerImage/BannerImage";
import BannerText from "./BannerText/BannerText";
import './Banner.css'

const Banner = () => {
    return (
        // <section className="h-[816px] bg-[#202839]" style={{ backgroundImage: `url('https://i.postimg.cc/8Pnzzw9k/team-bg-scaled.webp')`, backgroundRepeat: 'no-repeat', backgroundSize: "1900px" }}>
        <section className="2xl:h-[800px] xl:h-[780px] lg:h-[700px] bg-[#202839] bg-image px-0 mx-0">
            <div className="flex justify-center items-center pt-11 mx-0 px-0">
                <BannerText></BannerText>
                <BannerImage></BannerImage>
            </div>
        </section>
    );
};

export default Banner;