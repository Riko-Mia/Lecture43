import Button from "./component/UI/buttons/Button"
// import TextInput from "./component/UI/input/TextInput"
// import Text from "./component/UI/text/Text"

import { useState } from "react"

import InputGroup from "./component/shared/forms/inputGroup"

const init = {
    title: '',
    bio: '',
    skills: '',
}



const App = ()=>{
 
    const [values, setvalues] = useState({...init})
    const [errors, setErrors] = useState({...init})
    const [focuses, setFocuses] = useState({
        title:false,
        bio:false,
        skills: false,
    })

    const handleSubmit= (e) => {
        e.preventDefault()
        const {isValid, errors} = checkValidity(values)
        if(isValid){

            setvalues({...init})// is reset form input value after don't error submit
            setErrors({...init})
        } else{
            setErrors({...errors})
        }
    }


    const handleChange= (e) => {
        setvalues((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))


        const key =e.target.name
        const {isValid, errors}=checkValidity(values)
        
        if(!errors[key]){
            setErrors((prev) =>({
                ...prev,
                [key]: '',
            }))
        }
    }


    const handleFocus =(e) =>{
        const {errors}=checkValidity(values)
        setFocuses((prev) =>({
            ...prev,
            [e.target.name] : true,
        }))
    }
    
    const handleBlur =(e)=>{
        const key =e.target.name
        const {isValid, errors}=checkValidity(values)
        
        if(errors[key] && focuses[key]){
            setErrors((prev) =>({
                ...prev,
                [key]: errors[key],
            }))
        } else {
            setErrors((prev) =>({
                ...prev,
                [key]: '',
            }))
        }
    }


    const checkValidity = () =>{
        const errors ={}
        const {title, bio, skills} = values
        if(!title){
            errors.title = 'Invlaid Title'
        }
        if(!bio){
            errors.bio = 'Invlaid Bio'
        }
        if(!skills){
            errors.skills = 'Invlaid Skills'
        }
        return{
            errors, 
            isValid: Object.keys(errors).length === 0
        }
    }

  
    return(
        <>


        <div>
            <form onSubmit={handleSubmit}>
                <div style={{display:'flex', gap:'0.8rem',flexDirection:'column'}}>
                <InputGroup 
                    value={values.title}
                    name={'title'}
                    placeholder= {'Enter your Title...'}
                    label={'Title:'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error ={errors.title}
                ></InputGroup>
                <InputGroup 
                    value={values.bio}
                    name={'bio'}
                    placeholder= {'Enter your Bio'}
                    label={'Bio:'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error ={errors.bio}
                ></InputGroup>
                <InputGroup 
                    value={values.skills}
                    name={'skills'}
                    placeholder= {'Enter your Skills'}
                    label={'Skills:'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error ={errors.skills}
                ></InputGroup>
                <Button type='submit'>Submit</Button>
                </div>

                </form>
        </div>
            {/* <TextInput></TextInput>
            <Button>Test me</Button>
            <Text size='lg' line='lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam animi, velit consectetur voluptatem inventore officiis hic amet a illum vero.</Text>
             */}
             {/* <InputGroup 
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
             </InputGroup> */}


        </>
    )
}
export default App 