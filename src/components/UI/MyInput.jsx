import { useState } from "react";
import './MyInput.css'

const MyInput = ({placeholder}) => {
    const[value, setValue] = useState('')

    return(
        <input className='my_input'
            type="text" 
            value={value}
            placeholder={placeholder}
            onChange={(e)=>setValue(e.target.value)}
        />
    )
}

export default MyInput;