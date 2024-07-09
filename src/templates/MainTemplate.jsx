import Footer from "../components/Footer";
import Header from "../components/Header";

const MainTemplate = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainTemplate;