import React from 'react';


const Header= (props)=>{
    return <div className = "head">WELCOME {props.firstName}  {props.lastName}
    </div>
}

export default Header;