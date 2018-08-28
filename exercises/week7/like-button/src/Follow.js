import React from 'react';

const Follow = (props) => {

    const styles={
        height: '300px',
        width: '300px',
    }

    return (
        <div style={styles}>
            {props.status ?
            <button onClick={props.handleClick}><img style={styles} src="https://openclipart.org/image/800px/svg_to_png/214028/Thumbs-Up-Circle.png"></img></button>
            :
            <button onClick={props.handleClick}><img style={styles} src="https://media1.fdncms.com/gambit/imager/u/zoom/3075383/thumbs_down.jpg"></img></button>
        }
        </div>
    );
};

export default Follow;