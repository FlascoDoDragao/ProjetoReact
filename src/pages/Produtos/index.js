import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Container } from './styles';
import Footer from '../../components/Footer';

function Produtos() {

    return (
        <>
            <Header/>
            <Container>
                <Link to="/listar"><Button descricao="Listar"/></Link>
                <Link to="/listarNome"><Button descricao="Listar Por Nome"/></Link>
                <Link to="/atualizar"><Button descricao="Atualizar"/></Link>
                <Link to="/cadastrar"><Button descricao="Cadastrar"/></Link>
                <Link to="/deletar"><Button descricao="Deletar"/></Link>
            </Container>
            <Footer />
        </>
    )
}

export default Produtos;