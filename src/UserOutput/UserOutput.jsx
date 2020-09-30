import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p> As said by <b>{props.userName} : </b>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
            </p>
            <p>As said by <b>{props.userName} : </b>It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    );
}

export default userOutput;
