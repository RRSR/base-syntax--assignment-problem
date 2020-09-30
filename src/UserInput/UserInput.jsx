import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        width: '10%',
        height: '30px',
        fontSize: '25px',
        margin: '2px auto',
        marginLeft: '45%',
        padding: '2px',
        textAlign: 'center',
        border: '2px solid #6b98d7'
    }

    return (
        <input style={inputStyle}
               type='text'
               onChange={props.myOnChange}
               value={props.userName}/>
    );
}

export default userInput;
