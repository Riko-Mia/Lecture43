import Button from "./component/UI/buttons/Button"
// import TextInput from "./component/UI/input/TextInput"
// import Text from "./component/UI/text/Text"

import { useState } from "react"

import InputGroup from "./component/shared/forms/inputGroup"
import { deepClone } from "./utils/object-utills"

const init = {
    title: {
        value:'',
        error:'',
        focus:false,
    },
    bio: {
        value:'',
        error:'',
        focus:false,
    },
    skills: {
        value:'',
        error:'',
        focus:false,
    },
}



const App = ()=>{
    
    const [state, setState] =useState({...init})
    const [hasError, setHasError] = useState(false)
    const mapStateToValues = (e) =>{
        return Object.keys(state).reduce((acc, cur) => {
            acc[cur] =state[cur].value
            return acc
        }, {})
    }


    const handleSubmit= (e) => {
        e.preventDefault()
        const values = mapStateToValues(state)
        const {isValid, errors} = checkValidity(values)


        if(isValid){
            console.log(state)
        } else{
            const oldState = deepClone(state);
            Object.keys(errors).forEach((key) => {
                oldState[key].error = errors[key]
            })

            setState(oldState)
        }
        setState(init)
    }


    const handleChange= (e) => {

        const {name:key, value}= e.target
        const oldState= deepClone(state)
        const values = mapStateToValues(state)
        const {errors}=checkValidity(oldState)
            if(oldState[key].focus  && errors[key]){
                oldState[key].error = errors[key]
            } else{
                oldState[key].error =''
            }
        oldState[key].value = value
        setState(oldState)
        
    //     const {name: key, value} = e.target
    //     setState((prev)=>({
    //         ...prev,
    //         [key]: {
    //             ...prev[key],
    //             value: value,
    //         }
    //     }))


        // const key =e.target.name
        // const {isValid, errors}=checkValidity(values)
        
        // if(!errors[key]){
        //     setErrors((prev) =>({
        //         ...prev,
        //         [key]: '',
        //     }))
        // }
    }


    const handleFocus =(e) =>{
        const {name}= e.target
        const oldState = deepClone(state)
        oldState[name].focus = true
        setState(oldState)
    }
    
    const handleBlur =(e)=>{

        const key =e.target.name
        const values = mapStateToValues(state)
        const {errors}=checkValidity(values)
        
        const {name}= e.target
        const oldState= deepClone(state)
        if(oldState[key].focus  && errors[key]){
            oldState[key].error = errors[key]
        } else{
            oldState[key].error =''
        }
        setState(oldState)
    }


    const checkValidity = (values) =>{
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
                    value={state.title.value}
                    name={'title'}
                    placeholder= {'Enter your Title...'}
                    label={'Title:'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error ={state.title.error}
                ></InputGroup>
                <InputGroup 
                    value={state.bio.value}
                    name={'bio'}
                    placeholder= {'Enter your Bio'}
                    label={'Bio:'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error ={state.bio.error}
                ></InputGroup>
                <InputGroup 
                    value={state.skills.value}
                    name={'skills'}
                    placeholder= {'Enter your Skills'}
                    label={'Skills:'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error ={state.skills.error}
                ></InputGroup>
                <Button disabled={hasError} type='submit'>Submit</Button>
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