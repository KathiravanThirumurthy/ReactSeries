import React from 'react'
/*
const Fruitlists = ({items}) => {
    console.log(items);
  return (
    <ul>
      {items.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  )
}*/

const Fruitlists = (props) => {
    console.log(props.items);
  return (
    <ul>
      {props.items.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  )
}

export default Fruitlists