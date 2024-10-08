import styled from 'styled-components'

const TextInput = styled.input`
    width: 100%;
    border: ${(props) => props.error ? '2px solid red': '1px solid green'};
    outline: none;
    padding: 0.25rem 0.5rem;
    background: #fff;
    font-size:0.9rem;
    font-family: Arial;
    color: #333;
    
    &:focus{
        border: 2px solid skyblue;
    }
`




export default TextInput