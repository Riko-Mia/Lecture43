// import Button from "./component/UI/buttons/Button"
// import TextInput from "./component/UI/input/TextInput"
// import Text from "./component/UI/text/Text"

import InputGroup from "./component/shared/forms/inputGroup"

const App = ()=>{
    return(
        <>
            {/* <TextInput></TextInput>
            <Button>Test me</Button>
            <Text size='lg' line='lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam animi, velit consectetur voluptatem inventore officiis hic amet a illum vero.</Text>
             */}
             <InputGroup 
                name='Title'
                placeholder= {'Enter your Title'}
                label={'Title'}
                error ={'somthing went wrong'}
             >
             </InputGroup>
             <InputGroup 
                name='Password'
                placeholder= {'Enter your Password'}
                label={'Password'}
                error ={'Please wright a valid password'}
             >
             </InputGroup>
        </>
    )
}
export default App 