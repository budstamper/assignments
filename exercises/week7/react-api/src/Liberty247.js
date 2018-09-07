import React, { Component } from 'react';

class Liberty247 extends Component {

    render(){

        const styles = {
            textAlign: 'center',
            padding: '5%',
            backgroundColor: '#ffffff00',
        }

        const styles2 = {
            position: 'fixed',
            height: "100vh",
            width: "100vw",
            top: '0',
            left: '0',
            backgroundImage: 'url("http://orig01.deviantart.net/8978/f/2013/006/4/7/freedom_wallpaper_by_tgf2user-d5qlxow.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: '-100',
            
        }

        return (
            <div style={styles}>
                <h1>Youtube channels</h1>
                <h3>(in no particular order)</h3>
                <a text="Peter Schiff" title="Peter Schiff" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCIjuLiLHdFxYtFmWlbTGQRQ">Peter Schiff</a>
                <br></br>
                <a text="The True Conservative" title="The True Conservative" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCP5ot8k3eANjKoQphxnXP1g">The True Conservative</a>
                <br></br>
                <a text="Stefan Molyneux" title="Stefan Molyneux" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCC3L8QaxqEGUiBC252GHy3w">Stefan Molyneux</a>
                <br></br>
                <a text="misesmedia" title="misesmedia" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCmT6-ChKpaiIVu2fhEIsNtQ">Mises Media</a>
                <br></br>
                <a text="Learn Liberty" title="Learn Liberty" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCFJNcE0iHj7P6dhp5iCZRLg">Learn Liberty</a>
                <br></br>
                <a text="ReasonTV" title="ReasonTV" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UC0uVZd8N7FfIZnPu0y7o95A">Reason TV</a>
                <br></br>
                <a text="Mr. Dapperton" title="Mr. Dapperton" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCrcrV4J6exbyTY4gcbvL_lA">Mr. Dapperton</a>
                <br></br>
                <a text="Radical Capitalist" title="Radical Capitalist" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCMqhQ-Ken7aqk2XWvm_2MSQ">Radical Capitalist</a>
                <br></br>
                <a text="TheAnarchast" title="TheAnarchast" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCNvkDFGmEojalREtEYFPBXg">The Anarchast</a>
                <br></br>
                <a text="AdamKokesh" title="AdamKokesh" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UC0RJJ_Wm7jyOU9eY10LgcwA">Adam Kokesh</a>
                <br></br>
                <a text="TomWoodsTV" title="TomWoodsTV" type="rss" href="https://www.youtube.com/feeds/videos.xml?channel_id=UCsgWR55UyAiFarZYl1u1l9Q">Tom Woods TV</a>
                <div style={styles2}></div>
            </div>
        );
    }
};

export default Liberty247;