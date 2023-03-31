import React, { useEffect, useState } from 'react';

const HomeCart = () => {
    const [carts, setCart] = useState([]);
    useEffect(() => {
         fetch('fakeData.json')
         .then(res => res.json())
         .then(data => setCart(data))
    }, []);
    return (
        <div>
            <h3>this is home cart {carts.length}</h3>
           {
            carts.map(cart => <HomeCart></HomeCart>)
           }
        </div>
    );
};

export default HomeCart;