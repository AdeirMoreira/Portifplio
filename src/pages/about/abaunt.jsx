import * as s from './style'
import image from '../../assets/images/Adeir.jpg'
export default function About() {
    return(
        <s.Section>
            <s.Figure>
                <s.Img src={image} alt='Imagem de perfil de Adeir'></s.Img>
            </s.Figure>
            <s.Articule>
                
                    <s.h2> Olá, sou Adeir Moreira, desenvolvedor Full-Stack 👋 </s.h2>
                <s.P>
                    Estou em transição de carreira e estou buscando meu primeiro sim na tecnologia.
                    Estudo programação todos os dias desde 2021, fiz um bootcamp de 6 meses além outos cursos na plataforma Udemy. 
                    Tenho experiência em projetos com as tecnologias <s.Span>REACT, NODE, NEST, EXPRESS, API Rest, MYSQL, POSTGRESQL e DOCKER </s.Span>entre outas. 
                    Além de experiência em trabalhos em grupo aplicando ferramentas ágeis como <s.Span>SCRUN e KANBAN.</s.Span>
                </s.P>
            </s.Articule>
        </s.Section>
        
    )
}