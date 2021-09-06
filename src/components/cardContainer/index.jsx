import { Container } from './styles'

const CardContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    )
}

export default CardContainer