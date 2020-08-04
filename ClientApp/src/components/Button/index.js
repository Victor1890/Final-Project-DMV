import React from 'react';

export function CircleButton({classnameIcon,classnameButton, onClick}){
    return(
        <button type='button' className={classnameButton} onClick={onClick} >
            <i className={classnameIcon}></i>
        </button>
    );
}

export function Button({children,classnameButton, onClick}){
    return(
        <button type='submit' className={classnameButton} onClick={onClick}>
            {children}
        </button>
    );
}