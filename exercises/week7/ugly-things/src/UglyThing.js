import React from 'react';

const UglyThing = (props) => {

    const state = {
        title:"",
        description: "",
        url:props.uggo.url,
        number: props.uggo.number
    }

    console.log(props)

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
            <h3>{props.uggo.title}</h3>
            <p>{props.uggo.description}</p>
            <button onClick={()=>props.handleDelete(props.uggo.number)}>delete</button>
            <br></br>
            <input onChange={(e)=>state.title=e.target.value} name='title' type='text' placeholder='Title'></input>
            <input onChange={(e)=>state.description=e.target.value} name='description' type='text' placeholder='Description'></input>
            <input onChange={(e)=>state.url=e.target.value} name='url' type='text' placeholder='URL'></input>
            <button onClick={()=>props.handleEdit(state)}>submit</button>
        </div>
    );
};

export default UglyThing;