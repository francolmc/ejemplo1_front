import MainTemplate from "../templates/MainTemplate";

const Home = () => {
    return (
        <MainTemplate>
            Hola, este es el texto de la pagina princial.
            <br />
            <a href="/about">Sobre nosotros</a>
        </MainTemplate>
    );
};

export default Home;