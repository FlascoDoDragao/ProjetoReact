import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Container } from './styles';
import Footer from '../../components/Footer';

function Categorias() {

    return (
        <>
            <Header/>
            <Container>
                <Link to="/listar"><Button descricao="Listar"/></Link>
                <Link to="/categorias/listarNome"><Button descricao="Listar Por Nome"/></Link>
                <Link to="/categorias/atualizar"><Button descricao="Atualizar"/></Link>
                <Link to="/categorias/cadastrar"><Button descricao="Cadastrar"/></Link>
                <Link to="/categorias/deletar"><Button descricao="Deletar"/></Link>
            </Container>
            <Footer />
        </>
    )
}

export default Categorias;