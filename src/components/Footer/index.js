import {
    Container,
    TitleContainer,
    Text,
    Image,
    Subtitle,
} from './styles';
import { FiChevronsLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

function Footer() {

    return (
        <Container>
            <TitleContainer>
                <Text>Patrocinador <Image src="https://lh3.googleusercontent.com/proxy/GmqaX-xoP4Zv3-2IvbdoPdP029pS5BdGjLS0T8MrBLrbetdPyhKjQcJw2kvyAZAGX5hLfiejEup1oo1CgYaej21Hn_6ud0nhuG_TejceAPMdTCU" /></Text>
                <Subtitle>©2021 UNIÃO FLASCO - TERMO DE USO E POLITICA DE PRIVACIDADE</Subtitle>
                <Subtitle>CNPJ 00.111.222/0000-11</Subtitle>
                <Subtitle>(24) 99222-5579 | atendimento@uniaoflasco.com</Subtitle>
                <Subtitle>R. DO IMPERADOR | PETRÓPOLIS - RJ, 25610-222</Subtitle>
                <Subtitle>TODOS OS DIREITOS RESERVADOS © COPYRIGHT 2021 | TERMOS DE USO | TRANSPARÊNCIA</Subtitle>
            </TitleContainer>
        </Container>
    )
}

export default Footer;