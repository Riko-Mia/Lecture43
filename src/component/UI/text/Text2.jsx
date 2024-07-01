import styled from "styled-components";

const fontSizes ={
    sm:'0.8rem',
    md:'1rem',
    lg:'1.1rem'
}

const lingHeight = {
    sm: '1.2',
    md: '1.4',
    lg:'1.6',
}
const Text = styled.p`
    font-family: Arial;
    font-size: ${props => fontSizes[props.size] ?? '1rem' };
    color:#222;
    line-hight: ${props => lingHeight[props.line] ?? '1.3'};
`

export default Text 