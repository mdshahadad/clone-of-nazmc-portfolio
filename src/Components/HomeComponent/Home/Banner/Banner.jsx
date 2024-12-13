import BannerImage from "./BannerImage/BannerImage";
import BannerText from "./BannerText/BannerText";

const Banner = () => {
    return (
        <section className="h-[816px] bg-[#202839]" style={{ backgroundImage: `url('https://i.postimg.cc/8Pnzzw9k/team-bg-scaled.webp')`, backgroundRepeat: 'no-repeat', backgroundSize: "1900px" }}>
            <div className="flex justify-center items-center px-64 pt-11">
                <BannerText></BannerText>
                <BannerImage></BannerImage>
            </div>
        </section>
    );
};

export default Banner;