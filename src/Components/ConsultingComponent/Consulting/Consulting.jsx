import BookingCalendar from "../BookingCalendar/BookingCalendar";
import ConsultingBanner from "../ConsultingBanner/ConsultingBanner";
import ConsultingImage from "../ConsultingImage/ConsultingImage";
import TrustedCompany from "../TrustedCompany/TrustedCompany";

const Consulting = () => {
    return (
        <section>
            <ConsultingBanner></ConsultingBanner>
            <TrustedCompany></TrustedCompany>
            <ConsultingImage></ConsultingImage>
            <BookingCalendar></BookingCalendar>
        </section>
    );
};

export default Consulting;