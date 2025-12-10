import React from 'react'
const Student = (props) => {
    /*console.log(props)
    console.log(props.stuname);*/
  return (
    <div>Student name: {props.stuname} age : {props.age}</div>
  )
}

export default Student