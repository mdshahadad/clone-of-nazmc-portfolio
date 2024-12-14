import BannerImage from "./BannerImage/BannerImage";
import BannerText from "./BannerText/BannerText";
import './Banner.css'

const Banner = () => {
    return (
        <section className="2xl:h-[800px] xl:h-[780px] lg:h-[700px] h-[800px] bg-[#202839] bg-image px-0 mx-0 mb-12">
            <div className="lg:flex justify-center items-center pt-11 mx-0 px-0">
                <BannerText></BannerText>
                <BannerImage></BannerImage>
            </div>
        </section>
    );
};

export default Banner;