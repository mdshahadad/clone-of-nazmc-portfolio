import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import ConsultingCourse from "./ConsultingCourse/ConsultingCourse";
import Contact from "./Contact/Contact";
import LearnHome from "./LearnHome/LearnHome";
import MeetSection from "./MeetSection/MeetSection";
import NewspaperShow from "./NewspaperShow/NewspaperShow";
import ShowedUp from "./ShowedUp/ShowedUp";
import SuccessStories from "./SuccessStories/SuccessStories";
import WaysTohelp from "./WaysToHelp/WaysTohelp";
import WelcomeNote from "./WelcomeNote/WelcomeNote";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
            <WaysTohelp></WaysTohelp>
            <NewspaperShow></NewspaperShow>
            <ShowedUp></ShowedUp>
            <ConsultingCourse></ConsultingCourse>
            <div className="bg-[#202839]">
                <LearnHome></LearnHome>
            </div>
            <MeetSection></MeetSection>
            <SuccessStories></SuccessStories>
            <WhyChoose></WhyChoose>
            <Contact></Contact>
        </section>
    );
};

export default Home;