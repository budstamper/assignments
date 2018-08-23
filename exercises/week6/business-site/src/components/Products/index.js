import React from 'react';
import Item from './Item';

const Products = () => {

    const styles = {
        margin: "50px"
    }

    return (
        <div style={styles}>
            <div className="topRow">
            <div className="a">
            <Item name="Dell Lenovo Desktop" image="http://1.bp.blogspot.com/_GZbB5PrC9Is/TCLnf6v5iEI/AAAAAAAAAQU/ewW1ciqe8M4/s1600/computer-addict.jpg" price="$200"/>
            </div>
            <div className="info1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            <div className="bear">
            <Item name="Laptop DHR63" image="https://mobilecomputingproject.files.wordpress.com/2012/10/hp-laptop-computers-repairs.jpg" price="$150" />
            </div>
            <div className="info2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>
            <br></br>
            <div className="bottomRow">
            <div className="c">
            <Item name="Intel Core 3 desktop" image="https://www.bhphotovideo.com/images/images2500x2500/Lenovo_77231EU_H405_Desktop_Computer_749608.jpg" price="$175" />
            </div>
            <div className="info3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            <div className="d">
            <Item name="Omega Zues 4000" image="https://www.bhphotovideo.com/images/images1000x1000/cyberpowerpc_gamer_ultra_gua520_gaming_1170346.jpg" price="$1000" />
            </div>
            <div className="info4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>
         </div>
    )
}


export default Products;