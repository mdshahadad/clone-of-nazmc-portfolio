import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import WaysTohelp from "./WaysToHelp/WaysTohelp";
import WelcomeNote from "./WelcomeNote/WelcomeNote";

const Home = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
            <WaysTohelp></WaysTohelp>
        </section>
    );
};

export default Home;