import React from 'react'

const Productlist = ({ items, onBuy }) => {
 
    return (
    <div>
      {items.map((p) => (
        <div key={p.id}>
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => onBuy(p.name)}>Buy</button>
        </div>
      ))}
    </div>
  );

}

export default Productlist