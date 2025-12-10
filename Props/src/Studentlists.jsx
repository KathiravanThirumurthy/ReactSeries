import React from 'react'

const Studentlists = ({data}) => {
  return (
    <ul>
        {
            data.map(stu=><li key={stu.id}>{stu.name} - {stu.age}</li>)
        }
    </ul>
  )
}

export default Studentlists