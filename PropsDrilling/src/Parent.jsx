import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = ({count,setCount}) => {
  return (
    <div>
        <p>Parent Component</p>
        <p>{count}</p>
        <button onClick={()=>setCount(count +1 )}>Click</button>
        <ChildA count={count}/>
        <ChildB count={count}/>
    </div>
  )
}

export default Parent