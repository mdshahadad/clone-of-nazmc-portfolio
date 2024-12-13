import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import ConsultingCourse from "./ConsultingCourse/ConsultingCourse";
import NewspaperShow from "./NewspaperShow/NewspaperShow";
import ShowedUp from "./ShowedUp/ShowedUp";
import WaysTohelp from "./WaysToHelp/WaysTohelp";
import WelcomeNote from "./WelcomeNote/WelcomeNote";

const Home = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
            <WaysTohelp></WaysTohelp>
            <NewspaperShow></NewspaperShow>
            <ShowedUp></ShowedUp>
            <ConsultingCourse></ConsultingCourse>
        </section>
    );
};

export default Home;