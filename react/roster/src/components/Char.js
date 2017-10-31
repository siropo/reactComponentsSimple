import React from 'react';
import observerMenu from './../utils/observer';

const SingleChar = (props) => {
    console.log(props);
    return (
        <div onClick={() => observerMenu.executeObserver("changeFocus", { focusedChar: Number(props.params.id) })} className="wrapper-char">
            <img className="char-img" src={props.params.url} alt="img" />
        </div>
    )
}

export default SingleChar;