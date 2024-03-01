import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="content">{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
