import React from 'react'

function Hello(props) {
    //   return React.createElement('div',null,React.createElement('h1',null,'Ini Pakai JavaScript'))

    return (
        <div className='inidiv'>
            <h1>Ini Pakai JSX {props.name}</h1>
        </div>
    );
}

export default Hello