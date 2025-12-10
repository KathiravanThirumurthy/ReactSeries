import React from 'react'

const Userprofile = ({data}) => {
  return (
    <div>
       <p>{data.name} from {data.city} - Age: {data.age}</p>
    </div>
  )
}

export default Userprofile