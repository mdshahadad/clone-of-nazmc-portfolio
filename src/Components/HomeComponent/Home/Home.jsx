import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import WelcomeNote from "./WelcomeNote/WelcomeNote";

const Home = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Banner></Banner>
            <WelcomeNote></WelcomeNote>
        </section>
    );
};

export default Home;