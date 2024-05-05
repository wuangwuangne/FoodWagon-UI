import Header from './Header';
import Footer from './Footer';

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
