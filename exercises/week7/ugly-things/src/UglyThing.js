import React from 'react';

const UglyThing = (props) => {

    const styles={
        width: '25%',
        height: '200px',
    }

    const styles2 = {
        textAlign: 'center',
    }

    return (
        <div style={styles2}>
            <img style={styles} src={props.uggo.url}></img>
            <p>{props.uggo.title}</p>
            <p>{props.uggo.description}</p>
        </div>
    );
};

export default UglyThing;