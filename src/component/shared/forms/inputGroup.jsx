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


const InputGroup = ({label, name, value, placeholder, onChange, onBlur, onFocus,error})=>{


    return(
        <Container>
            <Label htmlFor={name}>
                {label}
            </Label>
            <TextInput onChange={onChange} name={name} id={name} placeholder={placeholder ?? ''} value={value} onFocus={onFocus} onBlur={onBlur} error={error}></TextInput>
            {error &&<ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}





export default InputGroup