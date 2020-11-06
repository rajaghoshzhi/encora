import React from 'react';

const ErrorHandler =(props) =>{

    return (
        <div className={props.classDetails} role="alert">
            {props.msg}
        </div>
    )
}


export default ErrorHandler;