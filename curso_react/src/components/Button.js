import React from "react";

const Button = ({children, onClick}) => {
  return <Button onClick={onClick} className= "button">{children}</Button>
  };
  
export default Button;