import React from 'react';
import Item from './Item';

const Products = () => {
    return (
        <div>
            <div>
            <Item name="Dell Lenovo Desktop" image="http://1.bp.blogspot.com/_GZbB5PrC9Is/TCLnf6v5iEI/AAAAAAAAAQU/ewW1ciqe8M4/s1600/computer-addict.jpg" price="$200"/>
            <Item name="Laptop DHR63" image="https://mobilecomputingproject.files.wordpress.com/2012/10/hp-laptop-computers-repairs.jpg" price="$150" />
            </div>
            <div>
            <Item name="Intel Core 3 desktop" image="https://www.bhphotovideo.com/images/images2500x2500/Lenovo_77231EU_H405_Desktop_Computer_749608.jpg" price="$175" />
            <Item name="Omega Zues 4000" image="https://www.bhphotovideo.com/images/images1000x1000/cyberpowerpc_gamer_ultra_gua520_gaming_1170346.jpg" price="$1000" />
            </div>
         </div>
    )
}


export default Products;