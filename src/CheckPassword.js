import { useState, useEffect } from 'react';


  function CheckPassword(props) {
  const {password, prevent} = props; 
  const [message, setMessage] = useState('weak')

  useEffect(()=>{
      if(password.length <= 2 ){
        setMessage("weak")
        prevent(true)
      } else if (password.length > 2 && password.length <= 6){
        setMessage("Medium")
        prevent(false)
      } else {
        setMessage("Strong")
        prevent(false)
      } 
    },[password, prevent])


  return (
    <p>{message} password</p>
  );
}

export default CheckPassword;
