import {Container} from './styles';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

function Home() {

    return (
        <>
            <Header/>                   
            <Container>
                    <Link to="/produtos"><Button descricao="Produtos"/></Link>
                    <Link to="/categorias"><Button descricao="Categorias"/></Link>
            </Container>
            <Footer/>
        </>
    )
}

export default Home;