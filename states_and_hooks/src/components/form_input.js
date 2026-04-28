import React from 'react';

const Forminput = ({ text, setText}) => {
    return (
       
      
        <input type="text" value={text} onChange={setText} placeholder = "Go ahead and enter some text now" />
    );

}

export default Forminput;