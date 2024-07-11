import Footer from "../components/Footer";
import Header from "../components/Header";
import PropType from "prop-types";

const MainTemplate = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropType.node.isRequired,
};

export default MainTemplate;
