import { ButtonHTMLAttributes } from "react";
import Spinner from "./Spinner";











interface ButtonProps {
    disabled?: boolean;
    text: string;
    type: "button" | "submit" | "reset";
    loading?: boolean
}


const Button = ({disabled, text, type, loading}: ButtonProps) => {
  return (
    <button type={type} className='button_bg w-1/3 mt-6' disabled={disabled}>{
        loading ? <Spinner button={true}/> : text
    }</button>
  )
}

export default Button