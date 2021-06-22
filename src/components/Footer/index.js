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
                <Text>Patrocinador | <Image src="https://lh3.googleusercontent.com/proxy/NDHTRPIZguXIAnEV9Nu0LCxC4G3lzZMGfg-CRFLMACFGvL9vq520NiFtpRYOLTVVovD_DggTfSs6RHllf2Hbduk5Y8yHHiw3LC7C7DPFGlZdxmM" /></Text>
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