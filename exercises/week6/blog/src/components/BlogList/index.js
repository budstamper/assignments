import React from 'react';
import Blog from './Blog'

const BlogList=() => {

    const blogs = [
        {
            title:"The Story of Your Enslavement",
            subtitle:"How it came to be and how you can finally be free",
            author:"Stefan Molyneux",
            date:"23 Sept 2007"
        },{
            title:"Democracy",
            subtitle:"The God that failed",
            author:"Hans Herman Hoppe",
            date:"03 Feb 2001"
        },{
            title:"What Has the Government Done With Our Money?",
            subtitle:"Hint: a lot of bad things",
            author:"Murray Rothbard",
            date:"11 Sept 1973"
        },{
            title:"Swords to Plowshares",
            subtitle:"A guide to freedom",
            author:"Ron Paul",
            date:"13 Nov 2003"
        }
    ]

    const displayBlogs = blogs.map((blog, i) =>{
        return <Blog key={blog.name+i}
                     blog={blog} />
    })

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    }

    const styles2 = {
        display: 'flex',
        flexDirection: 'column',
    }

    const styles3 = {
        backgroundColor: '#3A839E',
        padding: '15px',
        color: 'white',
        fontSize: '0.7em',
        fontWeight: '800',
        float: 'right'
    }

    const styles4 = {
        marginTop: "20px",

    }

    return (
      <div style={styles}>
          <div style={styles2}>{displayBlogs}
          <div style={styles4}><a style={styles3}>OLDER POSTS <span class="fa fa-long-arrow-right"></span></a></div></div>
      </div>
    );
}

export default BlogList;