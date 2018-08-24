import React from 'react';

const Blog =(props) => {

  const styles = {
    borderBottom:"2px solid #dddddd",
  }

  const styles2 = {
    color: "#dddddd"
  }

    return (
      <div style={styles} className="blogDiv">
        <h2>{props.blog.title}</h2>
        <h3>{props.blog.subtitle}</h3>
        <div><span style={styles2}>Posted by </span>{props.blog.author}<span style={styles2}> on {props.blog.date}</span></div>
      </div>
    );
}

export default Blog;
