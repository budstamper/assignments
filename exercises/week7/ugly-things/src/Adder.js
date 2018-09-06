import React from 'react';
import { connect } from 'react-redux'
import { addOne } from './Redux'

const Adder = (props) => {
    console.log(props)

    return (
        <div>
            <input onChange={props.handleChange} name='title' type='text' placeholder='Title'></input>
            <input onChange={props.handleChange} name='url' type='text' placeholder='URL'></input>
            <input onChange={props.handleChange} name='description' type='text' placeholder='Description'></input>
            <button onClick={props.handleSubmit}>Submit</button>
        </div>
    );
};


export default Adder