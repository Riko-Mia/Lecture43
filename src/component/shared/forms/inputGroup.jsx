import styled from "styled-components";

import TextInput from "../../UI/input/TextInput";   
import Label from "../../UI/input/label";




const Container = styled.div`
    // width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

const ErrorMessage = styled.div`
    font-size: 0.8rem;
    color: red;
`  
const handleChange=(e)=>{
    
}

const InputGroup = ({label, name, value, placeholder, onChaange, onBlur, onFocus,error})=>{


    return(
        <Container>
            <Label htmlFor={name}>
                {label}
            </Label>
            <TextInput onChange={handleChange} name={name} id={name} placeholder={placeholder}></TextInput>
            {error &&<ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}





export default InputGroup