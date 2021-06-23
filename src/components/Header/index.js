import {
    Container,
    TitleContainer,
    Icon,
    Title,
} from './styles';

import { Link } from 'react-router-dom';

function Header() {

    return (
        <Container>
            <TitleContainer>
                <Link to="/"><Icon src="https://pbs.twimg.com/media/Ec1ZfleXYAAcYFJ.jpg" /></Link>
                <Title>Ecommerce Flasco do Dragão</Title>
            </TitleContainer>
        </Container>
    )
}

export default Header;