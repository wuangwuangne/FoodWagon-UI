import Header from "../Components/Header";
import Footer from "../Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="py-[65px]"> {children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
