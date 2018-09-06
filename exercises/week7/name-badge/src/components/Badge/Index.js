import React, { Component } from 'react';

class Badge extends Component{
    constructor(props){
        super(props)
    }
    render(){
            const styles = {
                backgroundColor: 'blue',
                width: '500px',
            }
            return (
                <div style={styles}>
                    <p><span>First Name: {this.props.badge.fname} </span><span> Last Name: {this.props.badge.lname}</span></p>
                    <p><span>Email: {this.props.badge.email} </span><span> Birth Place: {this.props.badge.birthPlace}</span></p>
                    <p><span>Favorite Food: {this.props.badge.favFood} </span><span> Phone: {this.props.badge.phone}</span></p>
                    <p><span>First About: {this.props.badge.about}</span></p>
                </div>
            );
        }
};

export default Badge;